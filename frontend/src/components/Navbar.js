import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'
import store from "../store"

const Div = styled.div`
  background-color: #ff8080; 
`;

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.state = {
      loggedInUserName: []
    }
    store.subscribe(() => {
      this.setState({
        loggedInUserName: store.getState().loggedInUser
      })
    })
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
    console.log(this.state.loggedInUserName?.loggedInUser , "...")
    return (
      <Div>
        <Navbar expand="lg" className='position-sticky'>
          <Container>
            <Navbar.Brand as={Link} to={"/"} className="fontBold text-white">Pet Platform</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className='text-white' as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link className='text-white' as={Link} to={"/dashboard"}>Dashboard</Nav.Link>
                <Nav.Link className='text-white' as={Link} to={"/chatrooms"}>Chat</Nav.Link>
                <Nav.Link className='text-white' as={Link} to={"/signin"} onClick={() => this.handleLogoutClick()}>Logout</Nav.Link>
                <Nav.Link className='text-white' as={Link} to={"/communityform"}> Community Help </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className='text-white p-0 user-icon' href="#deets"><i class="bi bi-person-circle"></i><span className='px-1 ms-1'>{this.state.loggedInUserName?.loggedInUser?.full_name}</span></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Div>
    );
  }
}


