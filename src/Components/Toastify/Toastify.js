import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';


function RunToastify(){
  const notify = () => toast.success('🛒Agregado al carrito!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  return (
    <div className='col'>
      <button className="btn btn-primary w-75 mx-auto rounded-5 " onClick={notify}>Comprar</button>
      <ToastContainer />
    </div>
  );
}
export default RunToastify