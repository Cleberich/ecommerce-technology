import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoMyShop from "../Logo/Logo";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Login from "../Login/Login";

function BasicExample() {
  return (
    <Navbar
      className="dark sticky-sm-top sticky-md-top sticky-lg-top sticky-xl-top"
      expand="md"
    >
      <Container className="separacion container-fluid " id="desktop">
        <Navbar.Brand href="#home">
          <Link to="/">
            <LogoMyShop />
          </Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/category/smartphone"
              className="fs-7 text-white text-decoration-none mx-1"
            >
              iPhone
            </Link>
            <Link
              to="/category/macbook"
              className="fs-7 text-white text-decoration-none mx-1"
            >
              Macbook
            </Link>
            <Link
              to="/category/watch"
              className="fs-7 text-white text-decoration-none mx-1"
            >
              Watch
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/cart">
          <ShoppingBagOutlinedIcon className="text-light fs-5" />
          <span className="text-dark badge bg-white ms-1">
            <CartWidget />
          </span>
        </Link>
        <Login />
      </Container>
      <Navbar
        className="container-fluid"
        collapseOnSelect
        expand=""
        bg="negro"
        variant="dark"
        id="mobile"
      >
        <Container className="d-flex justify-content-between">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Link
                to="/category/smartphone"
                className="fs-7 text-white text-decoration-none mx-1"
              >
                iPhone
              </Link>
              <Link
                to="/category/macbook"
                className="fs-7 text-white text-decoration-none mx-1"
              >
                Macbook
              </Link>
              <Link
                to="/category/watch"
                className="fs-7 text-white text-decoration-none mx-1"
              >
                Watch
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/">
            <LogoMyShop className="w-125" />{" "}
          </Navbar.Brand>

          <Link to="/cart">
            {" "}
            <ShoppingBagOutlinedIcon className="text-light fs-6 text-end" />
          </Link>
        </Container>
      </Navbar>
    </Navbar>
  );
}

export default BasicExample;
