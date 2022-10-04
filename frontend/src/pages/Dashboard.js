import React from 'react'
 
function Dashboard (props) {
  return (
   <>
    <div>Dashboard</div>
    <h1>Status: {props.loggedInStatus}</h1>
   </>
  );
}

export default Dashboard;