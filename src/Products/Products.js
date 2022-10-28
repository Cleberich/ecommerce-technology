import { useState, useEffect } from "react";
import { getProducts } from "../asynckMock";
import Card from '../Components/Card/Card'
import SpinnerReact from "../Components/Spinner/Spinner";
import Portada from '../Components/Portada/Portada'
import TextoPrincipal from "../Components/TextoPrincipal/TextoPrincipal";


const Products = () =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect (()=>{
        getProducts().then(resolve =>{
            setProducts(resolve)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            
            setLoading(false);
            
        },)
    })
    if(loading) {
        return (
            <div>
                <h1 className="fs-5 mt-5">Cargando productos...</h1>
                <SpinnerReact/>
            </div>
        )
       
    }
    
    return (
        <div>
            <Portada/>
            <TextoPrincipal/>
            <h2 className="h2titulo mt-0 mb-4 mx-auto">Todos los modelos. <span className="h2titulospan"> Elegí el tuyo hoy!</span></h2>
            <Card products = {products}/>
        </div>
    )
}
export default Products