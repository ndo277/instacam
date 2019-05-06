import React from 'react';

const PostIndexItem = (props) => {
  return (
    <div className="feed-post" >

      <div className="feed-post-part">
        <img className="profile-pic" src={props.post.avatarUrl} />
        <p className="avatar-name" >{props.post.username}</p>
      </div>

      <img className= "feed-image" src={props.post.photoUrl}/>

      <div className="feed-post-part" >
        <p className="avatar-name" >{props.post.username}</p>
        <p className="post-caption" >{props.post.caption}</p>
      </div>

    </div>
  )
}

export default PostIndexItem;