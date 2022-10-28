import { createContext, useState, useEffect } from 'react'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
export const CartContext = createContext()

export const CartContextProvider =({children}) =>{
    
    const [cart, setCart] = useState([])
    const [totalCantidad, setTotalCantidad] = useState(0)

    
    const notifySuccess = () => toast.success('🛒Agregado al carrito!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    
        const agregarItem = (productoAgregado) =>{
            if(!estaEnCarrito(productoAgregado.id)){
                setCart([...cart, productoAgregado])
                notifySuccess()
            }else{
               console.log("producto ya agregado")
            }
        }


        const estaEnCarrito = (id) =>{
            return  cart.some(prod => prod.id === id)
            
        }
        
        const eliminarDelCarrito = (id) =>{
            const CarritoActualizado =  cart.filter(prod => prod.id !== id)
            setCart(CarritoActualizado)
        }

        const vaciarCarrito = () =>{
            setCart([])
        }

    useEffect(()=>{
        const cantidadTotal = obtenerCantidadTotal()
        setTotalCantidad(cantidadTotal)
        }, [cart])

        const obtenerCantidadTotal = () =>{
            let cantidadTotal = 0

            cart.forEach (prod =>{
                cantidadTotal += prod.quantity
            })
            return cantidadTotal
        }
    console.log(cart)
    return (
        <CartContext.Provider value={{cart, agregarItem, totalCantidad, eliminarDelCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}