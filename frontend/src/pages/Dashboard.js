import React from 'react'
import CommunityTabs from '../components/CommunityTabs';
import Navigation from '../components/Navbar';

 
const Dashboard = props => {
  return (
    <div>
      <Navigation />
      {/* <div>
        <h2>Dashboard</h2>
        <h2>Status: {props.loggedInStatus}</h2>
        <h2>User: {props.user}</h2>
      </div> */}
      <CommunityTabs/>
    </div>
  );
}

export default Dashboard;