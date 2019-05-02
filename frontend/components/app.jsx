import React from 'react';
import GreetingContainer from './greeting_container';
import {Route} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';


const App = (props) => (
  <div>
    <h1>Instacam</h1>
    {
      props.currentUser ? 
      (
        <Route exact path="/" component={GreetingContainer} />
      ):
      (
        <>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/(|signup)" component={SignupFormContainer} />
        </>
      )
    }
  </div>
);

export default App;