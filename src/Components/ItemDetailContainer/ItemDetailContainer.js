import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import MemoryIcon from '@mui/icons-material/Memory';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import FiveGIcon from '@mui/icons-material/FiveG';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SpinnerReact from '../Spinner/Spinner'
import '../Card/Card.css'
import { useContext } from 'react'
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { baseDeDatos } from "../../services/firebase";



const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < 20) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div className='row ms-1'>
            <div className='col-3  d-flex mt-3 border'>
                <button className='btn tbn-outline-dark' onClick={decrement}>-</button>
                <p className='fs-6 mx-auto mt-2'>{count}</p>
                <button className='btn tbn-outline-dark' onClick={increment}>+</button>
            </div>
            <div className='col-9 mt-3'>
                <button className='btn btn-primary rounded-4 py-2 my-1' onClick={() => onConfirm(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

const ItemDetailContainer = ({name, id, price, stock}) =>{

    const {agregarItem} = useContext(CartContext)

    const [ product, setProduct ] = useState({})
    const [cantidad, setCantidad] = useState(0)
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect (()=>{
        
        const documentoReferencia = doc(baseDeDatos, 'products', productId)
        
        getDoc(documentoReferencia).then(doc =>{
            const data = doc.data()
            const productoAdaptado = { id: doc.id, ...data}
            setProduct(productoAdaptado)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return (
            <div>
                <h1 className="fs-5 mt-5">Cargando productos...</h1>
                <SpinnerReact/>
            </div>
        )
       
    }
    
    const btnAgregarAlCarrito = (quantity)=>{
        setCantidad(quantity)
        agregarItem({name: product.name, id: product.id, price: product.price,  quantity})

        
    }
    const Count = ButtonCount 

    return (
        <div className="col-8 mx-auto card rounded-4 m-5 text-start border-0 shadow-sm" id="sm">
        <div className="m-5 row">
           <div className="col">
           <img className="w-100 mt-4 mb-3" src={product.img} alt={product.id}></img>
           <div className="row d-flex ">
            {product.img2 ? (<div className="col"><img className="w-100 " src={product.img2} alt={product.name}></img></div>): ''}
            {product.img3 ? (<div className="col"><img className="w-100 " src={product.img3} alt={product.name}></img></div>): ''}
            {product.img4 ? (<div className="col"><img className="w-100 " src={product.img4} alt={product.name}></img></div>): ''}
           </div>
           </div>
           <div className="col mt-1">
            <small className="badge bg-dark text-white">{product.badge}</small>
           <h2 className="text-left  fs-2 fw-bold ">{product.name}</h2>
           <div  className="d-flex justify-content-between">
           <p className="text-dark mt-2">{product.description}</p>
           </div>
           <h2 className="text-dark text-left fs-5 fw-bold mt-2">${product.price}</h2>
           <div>
           </div>
           <div className=''>
                {
                    cantidad === 0 ? (
                        <Count onConfirm={btnAgregarAlCarrito} stock={stock} />
                    ) : (
                        <Link to="/cart/"><button className='btn btn-dark mt-3'>Finalizar compra</button></Link>
                    )
                }
            </div>
           <div className="">
            <h3 className="border-2 border-bottom fs-6 fw-600  mt-3 pb-3"><CloseFullscreenIcon className="me-2 fs-2 fw-light"/><span>{product.pantalla}</span></h3>
            <h3 className="border-2 border-bottom fs-6 fw-600  mt-3 pb-3"><MemoryIcon className="me-2 fs-2 fw-light"/><span>{product.procesador}</span></h3>
            <h3 className="border-2 border-bottom fs-6 fw-600  mt-3 pb-3"><FiveGIcon className="me-2 fs-2 fw-light"/><span>{product.technology}</span></h3>
            <h3 className="border-2 border-bottom fs-6 fw-600  mt-3 pb-3"><FingerprintIcon className="me-2 fs-2 fw-light"/><span>{product.huella}</span></h3>
            <h3 className=" fs-6 fw-600  mt-3 "><CenterFocusWeakIcon className="me-2 fs-2 fw-light"/><span>{product.camera}</span></h3>
           </div>
           </div> 
       </div>
      </div>
    )
}
export default ItemDetailContainer

