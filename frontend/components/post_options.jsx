import React from 'react';
import { Link } from 'react-router-dom';

const PostOptions = ({post, deletePost, closeModal}) => {

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(closeModal());
    dispatch(deletePost(post.id));
  };

  return(
    <div>
      <h3>MODAL</h3>
      <button className="delete-button" onClick={handleClick}>Delete</button>
      <Link to={`/posts/${post.id}`}>
        <button>Go to post</button>
      </Link>
    </div>
  )
}

export default PostOptions;

