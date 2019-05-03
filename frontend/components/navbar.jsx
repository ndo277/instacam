import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const personalGreeting = () => (
    <div className="navbar">

      <img src="/images/logo.png" />
      <div className="navbar-pipe" />
      <h1 className="logo-name-navbar">Instacam</h1>
      <div className="navbar-spacer"/>

      <h3 className="welcome">Welcome, {props.currentUser.username}!</h3>
      <div className="navbar-spacer" />
      <button className="nav-button" onClick={props.logout}>Log Out</button>
    </div>
  );

  return props.currentUser ? personalGreeting() : null;

}; 

export default Navbar;