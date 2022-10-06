import React, { Component } from 'react';
import Registration from '../components/authentication/Registration';
// import axios from 'axios';
import Container from 'react-bootstrap/Container';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

//   handleLogoutClick() {
//     axios
//       .delete("http://localhost:3001/logout", { withCredentials: true })
//       .then(response => {
//         this.props.handleLogout();
//       })
//       .catch(error => {
//         console.log("logout error", error);
//       });
//   }
 
  render() { 
    return (
      <Container>  
        <div className='marginUp'>
            <h2>Status: {this.props.loggedInStatus}</h2>
            {/* <button onClick={() => this.handleLogoutClick()}>Logout</button> */}
            <br/><br/><br/>
            <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        </div>
      </Container>
    );
  }
}