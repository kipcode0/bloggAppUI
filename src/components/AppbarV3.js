import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Import Bootstrap components
import './AppbarV3.css';
import { NavLink } from 'react-router-dom';

export default function AppbarV3() {
  return (
    <div>
      <Navbar bg="blue" >
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
            
              <NavDropdown.Item href="/user/content">My Account</NavDropdown.Item>
            
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar>

    </div>
  );
}

