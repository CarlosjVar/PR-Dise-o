import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logoutUser } from '../../actions/authActions';

const MainNavbar = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const onLogoutClick = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  const guestLinks = (
    <>
      <Nav.Item className="mx-2">
        <Link to="/" className="nav-link">
          <i className="fa fa-home"></i> Inicio
        </Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Link to="/" className="nav-link">
          <i className="fas fa-shopping-cart"></i> Carrito
        </Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Link to="/register" className="nav-link">
          <i className="fas fa-user-plus"></i> Registrarse
        </Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Link to="/login" className="nav-link">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
      </Nav.Item>
    </>
  );

  const clientLinks = (
    <>
      <Nav.Item className="mx-2">
        <Link to="/" className="nav-link">
          <i className="fa fa-home"></i> Inicio
        </Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Link to="/" className="nav-link">
          <i className="fas fa-shopping-cart"></i> Carrito
        </Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Link to="/" className="nav-link">
          <i className="fas fa-clipboard-list"></i> Órdenes
        </Link>
      </Nav.Item>
      <Nav.Item className="mx-2">
        <Link to="/" onClick={onLogoutClick} className="nav-link">
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </Nav.Item>
    </>
  );

  return (
    <Navbar bg="primary" className="navbar-dark" expand="md">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="text-white">CompuHardware</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          className="text-white"
          aria-controls="responsive-navbar"
        />
        <Navbar.Collapse id="responsive-navbar">
          <Nav className="ml-auto">
            {isAuthenticated ? clientLinks : guestLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
