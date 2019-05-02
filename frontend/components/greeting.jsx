import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = (props) => {
  const personalGreeting = () => (
    <div>
      <h1 className="logo-name">Instacam</h1>
      <h3>Welcome, {props.currentUser.username}!</h3>
      <button onClick={props.logout}>Log Out</button>
    </div>
  );

  return props.currentUser ? personalGreeting() : null;

}; 

export default Greeting;