import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'

const Div = styled.div`
  background-color: #ff8080; 
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
        localStorage.removeItem("user");
        Cookies.remove('user')
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() { 
  return (
    <Div>
    <Navbar expand="lg" className='position-sticky'>
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="fontBold">Pet Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/dashboard"}>Dashboard</Nav.Link>
            <Nav.Link as={Link} to={"/chatrooms"}>Chat</Nav.Link>
            <Nav.Link as={Link} to={"/signin"} onClick={() => this.handleLogoutClick()}>Logout</Nav.Link>
            <Nav.Link as={Link} to={"/communityform"}> Community Help </Nav.Link>
          </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
    </Div>
  );
}
}


