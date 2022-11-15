import React from 'react'
import Container from 'react-bootstrap/Container';
import Navigation from '../components/Navbar';

 
const Dashboard = props => {
  return (
    <div>
      <Navigation />
      <div>
        <h2>Dashboard</h2>
        <h2>Status: {props.loggedInStatus}</h2>
        <h2>User: {props.user}</h2>
      </div>
    </div>
  );
}

export default Dashboard;