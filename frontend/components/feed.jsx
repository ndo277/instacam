import React from 'react';
import PostIndexContainer from './post_index_container';
import PostFormContainer from './post_form_container';

const Feed = () => {
  return (
    <div>
    <PostFormContainer />
    <PostIndexContainer />
    </div >
  )
};

export default Feed;