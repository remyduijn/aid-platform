import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './pages';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Map from './pages/Map';
import PrivateRoutes from './components/PrivateRoutes';
import ChatRoom from './pages/ChatRoom';
import CommunityForm from './components/CommunityForm'
import Conversation from './components/chat/Conversation';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      navItems: "show",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in && 
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          })
        } else if (
          !response.data.logged_in & 
          (this.state.loggedInStatus === "LOGGED_IN") 
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        } 
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  }


  render() {
    return (
      <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Home/>} exact/>
          </Route>
          <Route 
            path='/dashboard' 
            element={
              <Dashboard 
                loggedInStatus={this.state.loggedInStatus}
              />
            }
          />
          <Route 
            path='/signin' 
            element={
              <Signin
                handleLogin={this.handleLogin} 
              /> 
            }
          />
          <Route 
            path='/signup' 
            element={
              <Signup
                handleLogin={this.handleLogin} 
                loggedInStatus={this.state.loggedInStatus}
              /> 
            }
          />
          <Route 
            path='/community' 
            element={<Map/>}
          />
          <Route 
            path='/chatrooms' 
            element={<ChatRoom/>}
          />
          <Route
            path='/communityform'
            element={<CommunityForm/>}
          />

          <Route 
            exact
            path='/chatrooms/:id' 
            element={<Conversation />}
          />

        </Routes>
      </Router>
      </div>
    );
  }
}

// export default App;

