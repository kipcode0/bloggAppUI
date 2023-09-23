import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Import Bootstrap components
import './AppbarV3.css';
import { NavLink,Form,redirect } from 'react-router-dom';

export default function AppbarV3() {
  const logoutAction=()=>{
    localStorage.removeItem("Token");
    localStorage.removeItem("LastName");
    localStorage.removeItem("firstName");
    redirect('/');
  }
  return (
    <div>
      <Navbar bg="blue" >
      <input id="searchBox" type="text" placeholder="Search.."/>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
            
              <NavDropdown.Item href="/user/content">My Account</NavDropdown.Item>
            
              <NavDropdown.Divider />
              <NavDropdown.Item
              onClick={()=>logoutAction()}
              >Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Navbar>

    </div>
  );
}

