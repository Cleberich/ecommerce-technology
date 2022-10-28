import Spinner from 'react-bootstrap/Spinner';

function SpinnerReact() {
  return (
    <Spinner className="mt-3" animation="border" role="status" variant="danger">
      <span className="visually-hidden mt-5 ">Loading...</span>
    </Spinner>
  
  );
}

export default SpinnerReact;