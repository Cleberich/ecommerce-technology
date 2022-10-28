import './Card.css'
import RunToastify from '../Toastify/Toastify';
import { Link } from 'react-router-dom'

const Card = ({products})=>{
    return (
        <div className="row mx-5 bg-light" id="">
            { products.map(product => 
            <div className="col-xs-6 col-sm-6 col-md-5 col-lg-3 " id="cardproduct" key={product.id}>
                <div className="card border-0 shadow-md mb-3  rounded-4 py-5" id="card">
                <Link to={`/detalles/${product.id}`} className="text-decoration-none text-dark">
                <small className="text-marron text-start ms-5 ">{product.badge ? product.badge: " " }</small>
                 <h3 className="fs-4 text-start ms-5">{product.name}</h3>
                 <button className='btn btn-secondary text-dark border-0 rounded-5 w-50 invisible' id='option'>Ver detalle</button>

                {<img src={product.img} className="sizeImg pt-3 pb-3 mx-auto" id="imgproduct" alt="pro"></img>}
                </Link>
                <div className="d-flex justify-content-around ">   
                <h3 className="fs-7 text-start fw-normal ms-3 mt-3">{product.description}</h3>             
                {product.stock > 0 ? <RunToastify className='btn btn-primary my-2 rounded-5 fs-8' texto={'Comprar'}/>: <RunToastify  className='btn btn-primary  my-2 rounded-5 fs-8  disabled' texto={'Agotado'}/>}
                </div>
             
                </div>
            </div>) }
        </div>
    )
}
export default Card


