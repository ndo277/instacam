import React from 'react';
import GreetingContainer from './greeting_container';
import {Route} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

const App = () => (
  <div>
    <h1>Instacam</h1>
    <GreetingContainer />
    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer}/>
  </div>
);

export default App;