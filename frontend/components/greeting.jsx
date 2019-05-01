import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = (props) => {
  const personalGreeting = () => (
    <div>
      <h3>Welcome, {props.currentUser.username}!</h3>
      <button onClick={props.logout}>Log Out</button>
    </div>
  );

  const sessionLinks = () => (
    <div>
      <Link to='/signup'>Sign Up</Link>
      <br/><br/>
      <Link to='/login'>Log In</Link>
    </div>
  );

  return props.currentUser ? personalGreeting() : sessionLinks();

}; 

export default Greeting;