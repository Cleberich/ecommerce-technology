import { useState } from "react"

const Checkout = () => {

    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [telefono, setTelefono] = useState()

    const handleSubmit = (e) =>{
       e.preventDefault()
       if([nombre, email, telefono].includes('')){
        alert('Todos los campos son necesarios')
       }
      
    }


  return (
    <div className="bg-white p-5 mx-5 mt-3 text-start">
        <form className= "" onSubmit={handleSubmit}>
            <h2 className="fs-6 fw-bold mb-2 text-center">Checkout</h2>
                <label htmlFor='nombre' className="ms-1 fs-6">Nombre *</label>
                    <input type="text" className="form-control mb-2" placeholder="Ingresa tu nombre" onChange={e => setNombre(e.target.value)} id="nombre"/>
                <label htmlFor='email' className="ms-1 fs-6">Email *</label>
                    <input type="email" className="form-control mb-2" placeholder="Ingresa tu correo electrónico" onChange={e => setEmail(e.target.value)} id="email"/>
                <label htmlFor='telefono' className="ms-1 fs-6">Telefono *</label>
                    <input type="tel" className="form-control mb-2" placeholder="Ingresa tu teléfono" onChange={e => setTelefono(e.target.value)} id="telefono"/>
                <div className="text-end">
                    <input type="submit" className="text-end btn btn-dark"value="Completar pedido"/>     
                </div>
            </form>
    </div>
  )
}

export default Checkout