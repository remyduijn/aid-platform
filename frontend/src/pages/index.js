import React from 'react';
import '../styles/Hero.css';
// import styled from 'styled-components';
import charles from '../images/charles.png';

// const DIV2 = styled.div`
//     background-color: #F8F9FA; 
//     padding-top: 15rem;
// `;

const Home = () => {
  return (
    <div>
      <div className='center-image'>
        <img src={charles} alt="Dog" />
      </div>
      {/* <DIV2></DIV2> */}
    </div>
  );
}

export default Home;