import React from 'react';
import PostFormContainer from './post_form_container';
import {withRouter} from 'react-router';

const Navbar = (props) => {

  const handleClick = () => {
    props.history.push(`/users/${props.currentUser.id}`);
  };

  const navbar = () => (
    <div className="navbar">

        <a className="navbar-left" href="/">
        <img className="logo-navbar" src="/images/logo.png" />
      <div className="navbar-pipe" />
      <h1 className="logo-name-navbar">Instacam</h1>
        </a>

      <div className="navbar-spacer"/>

        <div className="navbar-center">
      <img onClick={handleClick} className="profile-pic" src={props.currentUser.avatarUrl} />
      <h3 className="welcome">Welcome, {props.currentUser.username}!</h3>
        </div>

      <div className="navbar-spacer" />

      <div className="navbar-buttons">
        <PostFormContainer />
        <img onClick={props.logout} className="logout" src="/images/logout.png" alt="logout"/>
      </div>

    </div>
  );

  return props.currentUser ? navbar() : null;

}; 

export default withRouter(Navbar);