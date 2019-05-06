import React from 'react';

const PostIndexItem = (props) => {
  return (
    <div>
      <img className= "feed-image" src={props.post.photoUrl}/>
    </div>
  )
}

export default PostIndexItem;