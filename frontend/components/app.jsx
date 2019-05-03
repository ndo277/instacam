import React from 'react';
import GreetingContainer from './greeting_container';
import {Route, Redirect, Switch} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import MainPageContainer from './main_page_container';
import Feed from './feed';



const App = (props) => (
  <div>
    <GreetingContainer />
    <Switch>
      {/* <ProtectedRoute exact path="/" component={Feed} /> */}
      <Route exact path="/" component={MainPageContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;