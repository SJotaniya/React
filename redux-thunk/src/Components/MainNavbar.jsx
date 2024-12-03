import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function MainNavbar() {
  return (
    <Navbar expand="lg" className="main-navbar">
      <Container fluid className="d-flex">
        <Navbar.Brand href="#" className="navbar-brand">Online Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link className="nav-link" to={"/"}>
              <Button className="nav-button">Home</Button>
            </Link>
            <Link className="nav-link" to={"/womans"}>
              <Button className="nav-button">Woman's Wear</Button>
            </Link>
            <Link className="nav-link" to={"/mans"}>
              <Button className="nav-button">Man's Wear</Button>
            </Link>
            <Link className="nav-link" to={"/jewellery"}>
              <Button className="nav-button">Jewellery</Button>
            </Link>
            <Link className="nav-link" to={"/electronics"}>
              <Button className="nav-button">Electronics</Button>
            </Link>
          </Nav>
          <Form className="d-flex search-form">
            <Form.Control type="search" placeholder="Search" className="search-input" aria-label="Search"/>
            <Button variant="outline-light" className="search-button">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
