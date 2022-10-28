import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const CartWidget = () => {
    
    const {totalCantidad} = useContext(CartContext)

    return (
    <>
        {totalCantidad}
    </>
  )
}

export default CartWidget