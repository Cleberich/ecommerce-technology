

const Pedidos = ({pedidos}) => {

  return (
    <div>
    {
      pedidos.map((pedido)=>(
          <div className='row border-bottom border-top'>
                  <div className='col text-start ms-2 border-bottom mt-4'>
                    <h2  className='fs-6'>{pedido[0]?.name} </h2>
                    <h2  className='fs-6'>{pedido[1]?.name} </h2>
                    <h2  className='fs-6'>{pedido[2]?.name} </h2>
                    <h2  className='fs-6'>{pedido[3]?.name} </h2>
                    <h2  className='fs-6'>{pedido[4]?.name} </h2>
                    <h2  className='fs-6'>{pedido[5]?.name} </h2>
                    <h2  className='fs-6'>{pedido[6]?.name} </h2>
                  </div>
                  <div className='col text-center mt-4'>
                    <h2 className='fs-6'>{pedido[0]?.quantity} </h2>
                    <h2 className='fs-6'>{pedido[1]?.quantity} </h2>
                    <h2 className='fs-6'>{pedido[2]?.quantity} </h2>
                    <h2 className='fs-6'>{pedido[3]?.quantity} </h2>
                    <h2 className='fs-6'>{pedido[4]?.quantity} </h2>
                    <h2 className='fs-6'>{pedido[5]?.quantity} </h2>
                  </div>
                  <div className='col text-center mt-4'>{pedido.fecha}</div>
                  <div className='col text-end me-2 fw-bold mt-4'>${pedido.totalAPagar}</div>   
          </div>
        )
        )
      }
      </div>
  )
}

export default Pedidos