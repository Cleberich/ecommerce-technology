import { baseDeDatos } from '../../services/firebase'
import { collection, addDoc } from 'firebase/firestore'

 const enviarMailDeConfirmacion = (correo, total) =>{
    const collectionRef = collection(baseDeDatos, 'email')
    const emailContent = {
        to: correo,
        message: {
        subject: "Hemos recibido tu pedido",
        text:'Gracias por tu compra, te enviaremos el enlace para que puedas pagar con MercadoPago',
        html: `
        <div >
        <h2>Gracias por tu compra</h2>
        <p>Te enviamos el enlace para que puedas pagar con MercadoPago</p>
        <p>El total a pagar es de <b>$${total}</p>
        <a href="https://www.mercadopago.com.uy/">Click para ir a mercadopago</a>
        </div>
        <div>
        <small>Tienes alguna consulta contactános por <a href="https://wa.link/we1m7t">whatsapp</a></small>
        
        </div>
        <img src="https://document-export.canva.com/gVsaI/DAFQSQgVsaI/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221027T131224Z&X-Amz-Expires=63712&X-Amz-Signature=4e68903e9b106d317f62588b87bd401eca4f0e978c35d944ae58e2debfd5c027&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2028%20Oct%202022%2006%3A54%3A16%20GMT"/>
        `
    }
    
    }  
    return addDoc(collectionRef, emailContent)
}
export default enviarMailDeConfirmacion

