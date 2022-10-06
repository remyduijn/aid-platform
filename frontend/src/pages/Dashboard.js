import React from 'react'
import Container from 'react-bootstrap/Container';
 
const Dashboard = props => {
  return (
    <Container>
      <div>
        <h2>Dashboard</h2>
        <h2>Status: {props.loggedInStatus}</h2>
        <h2>User: </h2>
      </div>
    </Container>
  );
}

export default Dashboard;