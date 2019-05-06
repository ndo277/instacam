import React from 'react';

const PostIndexItem = (props) => {
  return (
    <div className="feed-post" >
    
      <div className="feed-post-top">
        <img className="profile-pic" src={props.post.avatarUrl} />
        <p className="avatar-name" >{props.post.username}</p>
      </div>

      <img className= "feed-image" src={props.post.photoUrl}/>
    </div>
  )
}

export default PostIndexItem;