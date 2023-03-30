import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar style={{backgroundColor: "#3F2A14"}} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="d-flex align-items-center">
            <div className="navbar-brand">
              <img src="logo.png" alt="logo" style={{width: "70%"}} />
              <div className="header-text">Java-Coffee shop</div>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">Review</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/jobs">Jobs</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
