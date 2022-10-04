import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Navbar from '../components/Navbar';
import '../styles/Hero.css';
import styled from 'styled-components';
import charles from '../images/charles.png';
import Registration from '../components/authentication/Registration';
import Login from '../components/authentication/Login';
import axios from 'axios';

const DIV = styled.div`
    background-color: #ff9b9b; 
    padding-top: 18rem;

    @media screen and (max-width: 1330px) {

    }
`;

// const DIV2 = styled.div`
//     background-color: #F8F9FA; 
//     padding-top: 15rem;
// `;

export default class Home extends Component {
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
    axios.delete("http://localhost:3001/logout", { withCredentials: true })
    .then(response => {
      this.props.handleLogout();
    })
    .catch(error => {
      console.log("logout error", error);
    });
  }
 
  render() { 
    return (
      <div>
        <Navbar />
        <DIV></DIV>
        <div className='center-image'>
          <img src={charles} alt="Dog" />
        </div>
        {/* <DIV2></DIV2> */}
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    );
  }
}

const HomeWithRouter = withRouter(Home);