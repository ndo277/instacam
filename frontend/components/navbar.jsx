import React from 'react';

const Navbar = (props) => {
  const personalGreeting = () => (
    <div className="navbar">

        <div className="navbar-left">
      <img className="logo-navbar" src="/images/logo.png" />
      <div className="navbar-pipe" />
      <h1 className="logo-name-navbar">Instacam</h1>
        </div>

      <div className="navbar-spacer"/>

      <h3 className="welcome">Welcome, {props.currentUser.username}!</h3>
      <div className="navbar-spacer" />
      <button className="nav-button" onClick={props.logout}>Log Out</button>
    </div>
  );

  return props.currentUser ? personalGreeting() : null;

}; 

export default Navbar;