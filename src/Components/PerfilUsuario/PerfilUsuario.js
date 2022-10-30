import {useAuth0} from '@auth0/auth0-react'
import {useEffect, useState} from 'react'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { baseDeDatos } from '../../services/firebase'
import Pedidos from './Pedidos'
import SpinnerReact from '../Spinner/Spinner'


const PerfilUsuario = () => {

    const [pedidos, setPedidos]= useState([])
    const [loading, setLoading] = useState(true)
    const {user} = useAuth0()
    const correo = user.email 

    useEffect (()=>{

        const collectionReferencia = ( correo && query(collection(baseDeDatos, 'orders'), where('email', '==', correo)))

        getDocs(collectionReferencia).then(response =>{

            const productosAdaptados = response.docs.map(doc =>{
                const data = doc.data()
                return { ...data }

            })
            setPedidos(productosAdaptados)
        }).finally(()=>{
            setLoading(false)
        })
        
        },[correo])
       
        if(loading) {
            return (
                <div>
                    <h1 className="fs-5 mt-5">Cargando productos...</h1>
                    <SpinnerReact/>
                </div>
            )
           
        }

    return (
      <div className='row bg-white pb-5 m-3 shadow-md rounded-3 h-sm-25 h-md-75 h-lg-75 '>
        <div className='col-sm-8 col-md-3 col-lg-3 mx-auto border-end py-5 mt-md-5 mt-lg-5 mt-sm-1 bg-black h-75 rounded-5'>
            <img className='rounded-circle' src={user.picture} alt={user.name}/>
            <h3 className="fs-3 mt-3 pt-5 text-white">{user.name}</h3>
            <h4 className="fs-5 text-white pb-sm-1 pb-md-5 pb-lg-5 ">{user.email}</h4>
        </div>
        <div className='col mx-auto mt-5'>
            {
                pedidos.length > 0 ? (
                    <>
                    <h2>Mis pedidos</h2>
                        <div  className='row bg-black text-white'>
                                <div className='col fs-5 fw-bold text-start ms-2 my-2'>Pedido</div>
                                <div className='col fs-5 fw-bold text-center my-2'>Cantidad</div>
                                <div className='col fs-5 fw-bold text-center my-2'>Fecha</div>
                                <div className='col fs-5 fw-bold text-end me-2 my-2'>Total</div>
                        </div>
                            <Pedidos pedidos={pedidos}/>
                   </>
                ):(
                    <>
                        <h2 className="fw-bold">Aun no tienes pedidos</h2>
                        <p>Cuando realices algun pedido aparecera aquí</p>
                        <a href="/"className='btn btn-dark'>Ir a tienda</a>
                    </>
                )
            }
        </div>
      </div>
  )
}

export default PerfilUsuario