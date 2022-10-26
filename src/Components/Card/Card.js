import './Card.css'
import RunToastify from '../Toastify/Toastify';

const Card = ({products})=>{
    return (
        <div className="row mx-5" id="">
            { products.map(product => 
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 " id="cardproduct" key={product.id}>
                <div className="card mb-3  rounded-4 py-5" id="card">
                <small className="text-marron text-start ms-5 ">{product.badge ? product.badge: " " }</small>
                 <h3 className="fs-4 text-start ms-5">{product.name}</h3>
                {<img src={product.img} className="sizeImg pt-3 pb-3 mx-auto" id="imgproduct" alt="pro"></img>}
                <div className="d-flex justify-content-around ">
                <h3 className="fs-7 fw-normal ms-3 mt-3">{product.description}</h3>
                {product.stock > 0 ? <RunToastify className='btn btn-primary' texto={'Comprar'}/>: <RunToastify  className='btn btn-primary disabled' texto={'Agotado'}/>}
                </div>
                <small className='fs-7 text-success fw-bold mt-4'>{product.stock > 0 ? `Últimas ${product.stock} unidades!!`: ""}</small>
                </div>
            </div>) }
        </div>
    )
}
export default Card


