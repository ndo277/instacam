import React from 'react';
import PostFormContainer from './post_form_container';
import {withRouter} from 'react-router';

const Navbar = (props) => {

  function scrollTransition(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      document.getElementById("logo-name").style.opacity = "0";
      document.getElementById("navbar-pipe").style.opacity = "0";
      document.getElementById("navbar").style.height = "50px";
    } else {
      document.getElementById("logo-name").style.opacity = "1";
      document.getElementById("navbar-pipe").style.opacity = "1";
      document.getElementById("navbar").style.height = "77px";
    }
  }

  window.onscroll = function() {scrollTransition();};

  const handleClick = () => {
    props.history.push(`/users/${props.currentUser.id}`);
  };

  const navbar = () => (
    <div id="navbar" className="navbar">

        <a className="navbar-left" href="/">
        <img className="logo-navbar" src="/images/logo.png" />
      <div id="navbar-pipe" className="navbar-pipe" />
      <h1 id="logo-name" className="logo-name-navbar">Instacam</h1>
        </a>

      <div className="navbar-spacer"/>

        <div className="navbar-center">
      <img onClick={handleClick} className="profile-pic-navbar" src={props.currentUser.avatarUrl} />
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