import React from 'react'
import '../style/NavBarstyle.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/ProvaLogo.png'

export default function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container id="navbarContainer" fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center logo-container">
          <img id='Logo' src={logo} alt="ProvaLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="linkContainer">
            <Nav.Link as={Link} to="/" className="nav-link-red">Home</Nav.Link>
            <Nav.Link as={Link} to="/favorite" className="nav-link-red">Favorite</Nav.Link>
            <Nav.Link as={Link} to="/contacts" className="nav-link-red">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link-red d-lg-none">Login</Nav.Link>
          </Nav>
          <div className="loginUser d-none d-lg-flex">
            <Link to="/login">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
                alt="User Icon"
                className="user-icon-img"
                id="userImg"
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
