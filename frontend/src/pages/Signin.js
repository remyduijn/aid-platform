import React, { Component } from 'react';
import Login from '../components/authentication/Login';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../styles/Hero.css';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
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
      <Container>
        <div className='marginUp'>
          <h2>Status: {this.props.loggedInStatus}</h2>
          {/* <button onClick={() => this.handleLogoutClick()}>Logout</button> */}
          <br/><br/><br/>
          <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> 
          <br/>  
          <Link to={"/signup"}><a>Sign up</a></Link>
        </div>
      </Container>
    );
  }
}