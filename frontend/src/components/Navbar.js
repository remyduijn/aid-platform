import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Div = styled.div`
    background-color: #ff9b9b; 
`;

export default class Navigation extends Component {

  constructor(props) { 
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() { 
  return (
    <Div>
    <br />
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>Pet-Sitters</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/signin"}>Sign in</Nav.Link>
            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/dashboard"}>Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/community"}>
                Community
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/messages"}>Messages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => this.handleLogoutClick()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Div>
  );
}
}


