import React from 'react';
import { Link } from 'react-router-dom';

const PostOptions = ({post, deletePost, closeModal}) => {

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(closeModal());
    dispatch(deletePost(post.id));
  };

  const handleCancel = (e) => {
    dispatch(closeModal());
  };

  return(
    <div className="options">
      <button className="modal-button" onClick={handleClick}> 
        <p className="delete-button">Delete</p>  
      </button>

      <div className="options-line" />
      
      <Link to={`/posts/${post.id}`}>
        <button onClick={handleCancel} className="modal-button">Go to post</button>
      </Link>

      <div className="options-line" />
      
      <button className="modal-button" onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default PostOptions;

