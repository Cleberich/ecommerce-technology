import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';


function RunToastify( {className, texto} ){
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
      <button className={className} onClick={notify}>{texto}</button>
      <ToastContainer />
    </div>
  );
}
export default RunToastify