import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import bgImage from './background.jpg';

const NavigationBar = () => (
  <Navbar bg="light" expand="lg" style={{ backgroundImage: `url(${bgImage})` }}>
    <Nav className="ml-auto">
      <div>
        <h1 className="maoyuan">Maoyuan</h1>
      </div>
      <Nav.Link as={Link} className="navbar-link" to="/about">About Me</Nav.Link>
      <Nav.Link as={Link} className="navbar-link" to="/portfolio">Portfolio</Nav.Link>
      <Nav.Link as={Link} className="navbar-link" to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} className="navbar-link" to="/resume">Resume</Nav.Link>
    </Nav>
  </Navbar>
);

export default NavigationBar;
