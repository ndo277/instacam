import React from 'react';
import GreetingContainer from './greeting_container';
import {Route, Switch} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {MainPageContainer} from './main_page_container';



const App = (props) => (
  <div>
    <h1>Instacam</h1>
    <GreetingContainer />
    <Switch>
        <Route path="/" component={MainPageContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;