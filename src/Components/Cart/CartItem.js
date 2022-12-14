import { useContext,useEffect,useState } from "react"
import { CartContext } from "../../Context/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ id, name, quantity, price }) => {
    const {eliminarDelCarrito} = useContext(CartContext)
    const {cart} = useContext(CartContext)

    const [subtotal, setSubtotal] = useState()

    const obtenerSubtotal = () =>{
     const subtotalPorProducto = quantity * price
     setSubtotal(subtotalPorProducto)
    }

    useEffect(()=>{
      obtenerSubtotal()
    }, [cart])
    
    return (
    <div className="" >
        <div  className="row py-1 ">
           <div className="col text-start ms-3"><p className="fs-6">{name}</p></div>
            <div className="col"><p className="fs-6 tex">${price}</p></div>
            <div className="col text-center"><p className="fs-6 tex">{quantity}</p></div>
            <div className="col text-center"><p className="fs-6 tex">${subtotal}</p></div>
           <div className="col text-end me-3"> <button className="btn btn-danger" onClick={()=>eliminarDelCarrito(id)}><DeleteIcon/></button></div>
        </div>
    </div>
  )
}

export default CartItem