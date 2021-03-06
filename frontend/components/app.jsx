import React from 'react';
import NavbarContainer from './navbar_container';
import {Route, Redirect, Switch} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import MainPageContainer from './main_page_container';
import PostShowContainer from './post_show_container';
import UserProfileContainer from './user_profile_container';
import UserEditContainer from './user_edit_container';
import Modal from './modal';



const App = () => {
  return(
  <div>
    <NavbarContainer />
    <Modal />
    <Switch>
      <Route exact path="/" component={MainPageContainer} />
      <ProtectedRoute path="/posts/:postId" component={PostShowContainer} />
      <ProtectedRoute path="/users/:userId/edit" component={UserEditContainer} />
      <ProtectedRoute path="/users/:userId" component={UserProfileContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
  )
};

export default App;