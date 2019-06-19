import React from 'react';
import SignupFormContainer from './signup_form_container';
import PostIndexContainer from './post_index_container';

const MainPage = (props) => {
  if (!props.currentUser) {
    return <SignupFormContainer />
  } else {
    return <PostIndexContainer />
  }
}

export default MainPage;