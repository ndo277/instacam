import React from 'react';
import SignupFormContainer from './signup_form_container';
import PostIndexContainer from './post_index_container';
import FollowingIndexContainer from './following_index_container';

const MainPage = (props) => {
  if (!props.currentUser) {
    return <SignupFormContainer />
  } else {
    return (
      <div className="feed-containers">
        <FollowingIndexContainer />
        <PostIndexContainer />
      </div>
    )
  }
}

export default MainPage;