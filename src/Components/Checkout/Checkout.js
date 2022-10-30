import { useState, useContext, useEffect } from "react"
import { addDoc, collection } from 'firebase/firestore'
import { baseDeDatos } from '../../services/firebase'
import { CartContext } from "../../Context/CartContext"
import QrCode2Icon from '@mui/icons-material/QrCode2';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LogoMercadoPago from "../Logo/LogoMercadoPago";
import Swal from 'sweetalert2'
import enviarMailDeConfirmacion from './enviarMailDeConfirmacion'
import {formatearFecha} from '../../Helpers/Index'


const Checkout = () => {

    const [nombre, setNombre] = useState()
    const [apellido, setApellido] = useState()
    const [direccion, setDireccion] = useState()
    const [departamento, setDepartamento] = useState()
    const [email, setEmail] = useState()
    const [telefono, setTelefono] = useState()
    const [QrMercadoPago, setQrMercadoPago] = useState(false)
    const [LinkMercadoPago, setLinkMercadoPago] = useState(false)

    const [totalAPagar, setTotalAPagar] = useState(0)

    const {cart} = useContext(CartContext)
    const {subtotal} = useContext(CartContext)
    const fechaSinFormatear = new Date()

    const fecha = formatearFecha(fechaSinFormatear)


    const completarPedido = (e) =>{
   
        const collectionReferencia = collection(baseDeDatos, 'orders')
        const datos = {nombre, apellido, direccion, departamento, email, fecha, telefono,...cart, totalAPagar, QrMercadoPago, LinkMercadoPago}
        e.preventDefault()
       if(nombre === ''||telefono === ''||email === '' || direccion === ''|| departamento === ''||telefono ===''){
        Swal.fire(
            'Oh no!!',
            'Tienes campos obligatorios sin completar!',
            'error'
          )
       }else{
        addDoc(collectionReferencia, datos )
        const correo = email
        const total = totalAPagar
		enviarMailDeConfirmacion(correo, total);
        Swal.fire({
            icon: 'success',
            title: 'Pedido realizado con éxito',
            text: `Revisa tu correo electronico ${correo}`,
            width: 600,
            showConfirmButton: false,
            padding: '3em',
            color: '#010101',
            background: '#fff url(/images/trees.png)',
            footer: '<a   href="/">Ir al inicio</a=>',
            backdrop: `
              rgba(0,1,1,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
              `
            })
        
    }
    
       
      
    }


    useEffect(()=>{
        setTotalAPagar(subtotal)
    },[totalAPagar])


  return (
    <div className="bg-white p-5 mx-auto mt-3 text-start d-inline-flex col-sm-12 col-md-8 col-lg-8 row">
        <div className="col-sm-10 col-md-8 col-lg-8">
        <form className= "" onSubmit={completarPedido}>
            <h2 className="fs-6 fw-bold mb-2 text-center">Detalle de facturación</h2>
                <label htmlFor='nombre' className="ms-1 fs-6">Nombre *</label>
                    <input type="text" name="asunto" className="form-control mb-2" placeholder="Ingresa tu nombre" onChange={e => setNombre(e.target.value)} id="nombre"/>
                <label htmlFor='apellido' className="ms-1 fs-6">Apellido </label>
                    <input type="text" name="texto" className="form-control mb-2" placeholder="Ingresa tu apellido" onChange={e => setApellido(e.target.value)} id="apellido"/>
                <label htmlFor='direccion' className="ms-1 fs-6">Dirección </label>
                    <input type="text" className="form-control mb-2" placeholder="Ingresa tu direccion" onChange={e => setDireccion(e.target.value)} id="direccion"/>
                <label htmlFor='departamento' className="ms-1 fs-6">Departamento</label>
                    <input type="text" className="form-control mb-2" placeholder="Ingresa tu departamento" onChange={e => setDepartamento(e.target.value)} id="departamento"/>
                <label htmlFor='email' className="ms-1 fs-6">Email *</label>
                    <input type="email" name="correo" className="form-control mb-2" placeholder="Ingresa tu correo electrónico"  onChange={e => setEmail(e.target.value)} id="email"/>
                <label htmlFor='telefono' className="ms-1 fs-6">Telefono *</label>
                    <input type="tel" className="form-control mb-2" placeholder="Ingresa tu teléfono" onChange={e => setTelefono(e.target.value)} id="telefono"/>
            </form>
        </div>
            <div  className="col-sm-12 col-md-4 col-lg-4 d-block">
                <h2 className="text-center fs-6 fw-bold">Tu orden</h2>
                <h3 className="ms-5 me-4 mt-4 d-flex justify-content-between fs-6">Total a Pagar <span>${subtotal}</span></h3>
                <div className="ms-4 d-flex justify-content-center">
                    <input className="" type="checkbox" defaultChecked={QrMercadoPago} onChange={() => setQrMercadoPago(!QrMercadoPago)}/>
                    <label className="fs-7 ms-2"><QrCode2Icon/> <LogoMercadoPago/></label>
                    <input className="" type="checkbox" defaultChecked={LinkMercadoPago} onChange={() => setLinkMercadoPago(!LinkMercadoPago)}/>
                    <label className="fs-7 ms-2"><InsertLinkIcon/> <LogoMercadoPago/> </label>
                </div>
            <div className="mx-4">
                    <button type="submit" onClick={completarPedido} className="ms-sm-1 ms-md-3 ms-lg-3 mt-3 text-center btn btn-dark w-100">Completar pedido</button>
            </div>
            </div>
    </div>
  )
}

export default Checkout
