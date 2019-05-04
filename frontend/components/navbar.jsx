import React from 'react';

const Navbar = (props) => {
  const personalGreeting = () => (
    <div className="navbar">

        <a className="navbar-left" >
        <img className="logo-navbar" src="/images/logo-v.png" />
      <div className="navbar-pipe" />
      <h1 className="logo-name-navbar">Instacam</h1>
        </a>

      <div className="navbar-spacer"/>

        <div className="navbar-center">
      <img className="profile-pic" src={props.currentUser.photoUrl} />
      <h3 className="welcome">Welcome, {props.currentUser.username}!</h3>
        </div>

      <div className="navbar-spacer" />
      <button className="nav-button" onClick={props.logout}>Log Out</button>
    </div>
  );

  return props.currentUser ? personalGreeting() : null;

}; 

export default Navbar;