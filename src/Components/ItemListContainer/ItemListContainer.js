import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import SpinnerReact from "../Spinner/Spinner";
import Portada from "../Portada/Portada";
import TextoPrincipal from "../TextoPrincipal/TextoPrincipal";
import { getDocs, collection, query, where } from "firebase/firestore";
import { baseDeDatos } from "../../Services/Firebase/Index";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionReferencia = categoryId
      ? query(
          collection(baseDeDatos, "products"),
          where("category", "==", categoryId)
        )
      : collection(baseDeDatos, "products");

    getDocs(collectionReferencia)
      .then((response) => {
        const productosAdaptados = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productosAdaptados);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div>
        <h1 className="fs-5 mt-5">Cargando productos...</h1>
        <SpinnerReact />
      </div>
    );
  }

  return (
    <div>
      {!categoryId && <Portada />}
      <TextoPrincipal />
      <h2 className="h2titulo mt-0 mb-4 mx-auto">
        Todos los modelos.{" "}
        <span className="h2titulospan"> Elegí el tuyo hoy!</span>
      </h2>
      <Card products={products} />
    </div>
  );
};
export default ItemListContainer;
