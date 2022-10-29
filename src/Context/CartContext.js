import { createContext, useState, useEffect } from 'react'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Swal from 'sweetalert2'


export const CartContext = createContext()

export const CartContextProvider =({children}) =>{
    
    const [cart, setCart] = useState([])
    const [totalCantidad, setTotalCantidad] = useState(0)
    const [subtotal, setSubtotal] = useState(0)

    
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
            Swal.fire({
                title: 'Estás seguro?',
                text: "Esta acción no se puede revertir!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#000',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, quiero borrar!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Productos eliminados!',
                    'No tienes productos agregados al carrito.',
                    'success'
                  )
                  setCart([])
                }
              })
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

    useEffect(()=>{
        const subtotal = obtenerSubtotalPorProducto()
        setSubtotal(subtotal)
    }, [cart])

    const obtenerSubtotalPorProducto = () =>{
        let subtotal = 0

        cart.forEach(prod=>{
            subtotal += prod.quantity * prod.price
        })
        return subtotal
    }
    

    return (
        <CartContext.Provider value={{cart, agregarItem, totalCantidad, eliminarDelCarrito, vaciarCarrito, subtotal}}>
            {children}
        </CartContext.Provider>
    )
}