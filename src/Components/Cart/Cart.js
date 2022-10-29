
import { useContext } from "react"
import '../Card/Card.css'
import { CartContext } from "../../Context/CartContext"
import CartItem from './CartItem'
import { Link } from "react-router-dom"

const Cart = () => {

    const {cart} = useContext(CartContext)
    const {id} = cart
    const {eliminarDelCarrito} = useContext(CartContext)
    const {vaciarCarrito} = useContext(CartContext)
    

    return (
    <div className="col-10 mt-5 card mx-auto rounded-4 py-5 border-0 shadow-sm " id="cardCart">
       {cart.length > 0 ?  <h2 className="text-center my-3">Mi pedido</h2> :  <h2 className="text-center my-3">Aún no has agregado productos al carrito</h2>}
        {cart.length > 0 && (
            <div  className="row fw-bold ">
            <div className="col text-start ms-3"><p>Producto</p></div>
            <div className="col"><p>Precio</p></div>
            <div className="col text-center"><p>Cantidad</p></div>
            <div className="col text-center"><p>Subtotal</p></div>
            <div className="col text-end me-3"><p>Eliminar</p></div>
        </div>
        )}
        <div>
        { cart.map(p => <CartItem key={p.id} {...p}/>) }
        {cart.length > 0 ? (
           <div className="my-3 d-block justify-content-between">
             <button onClick={vaciarCarrito} className="btn btn-danger me-2">Limpiar carrito</button>
            <Link to='/checkout'><button className="btn btn-dark">Checkout</button></Link>
           </div>
        ): <Link to="/"><button className="btn btn-dark my-3">Ver productos</button></Link>}
        </div>
    </div>
  )
}

export default Cart