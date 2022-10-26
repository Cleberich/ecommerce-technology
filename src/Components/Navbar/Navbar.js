import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoMyShop from '../Logo/Logo';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar className="dark sticky-sm-top sticky-md-top sticky-lg-top sticky-xl-top" expand="md">
      <Container className="separacion container-fluid " id="desktop">
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
      <Navbar className='container-fluid' collapseOnSelect expand="" bg="negro" variant="dark" id="mobile">
      <Container className="d-flex justify-content-between" >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link href="#features">iPhone</Nav.Link>
            <Nav.Link href="#pricing">Macbook</Nav.Link>
            <Nav.Link href="#pricing">iPad</Nav.Link>
            <Nav.Link href="#pricing">Watch</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        <Navbar.Brand href="#home"><LogoMyShop className="w-125" /> </Navbar.Brand>


       
        <ShoppingBagOutlinedIcon className="text-light fs-6 text-end"/>
      </Container>
    </Navbar>
    </Navbar>
    
  );
}

export default BasicExample;



// function CollapsibleExample() {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
//     </Navbar>
//   );
// }

// export default CollapsibleExample;