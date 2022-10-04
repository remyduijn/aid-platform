import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Hero.css';
import styled from 'styled-components';
import charles from '../images/charles.png';
import Registration from '../components/authentication/Registration';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
    <div>
      {/* <Navbar />
      <DIV></DIV>
      <div className='center-image'>
        <img src={charles} alt="Dog" />
      </div>
      <DIV2></DIV2> */}
      <Registration />
    </div>
    );
  }
}