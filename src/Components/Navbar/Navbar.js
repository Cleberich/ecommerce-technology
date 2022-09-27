import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoMyShop from '../Logo/Logo';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';

function BasicExample() {
  return (
    <Navbar className="dark sticky-sm-top sticky-md-top sticky-lg-top sticky-xl-top" expand="md">
      <Container className="separacion container-fluid ">
        <Navbar.Brand href="#home"><LogoMyShop/> </Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light fs-7" href="#home">Mac</Nav.Link>
            <Nav.Link className="text-light fs-7" href="#link">Iphone</Nav.Link>
            <Nav.Link className="text-light fs-7" href="#link">iPad</Nav.Link>
            <Nav.Link className="text-light fs-7" href="#link">Watch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <input className='form-control w-25 mx-auto bg-light' type="search" placeholder='Buscar'></input>
        <button className='btn btn-outline-dark border-0 ' ><SearchIcon className="text-light"/></button>
       
        <ShoppingBagOutlinedIcon className="text-light fs-5"/><span className='text-dark badge bg-white ms-1'>2</span>
      </Container>
    </Navbar>
  );
}

export default BasicExample;