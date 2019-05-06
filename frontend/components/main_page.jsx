import React from 'react';
import Feed from './feed';
import SignupFormContainer from './signup_form_container';

const MainPage = (props) => {
  if (!props.currentUser) {
    return <SignupFormContainer />
  } else {
    return <Feed />
  }
}

export default MainPage;