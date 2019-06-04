import React from 'react';
import { Link } from 'react-router-dom';

const PostOptions = ({post, deletePost, closeModal, currentUser}) => {

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(closeModal());
    dispatch(deletePost(post.id));
  };

  const handleCancel = (e) => {
    dispatch(closeModal());
  };

  const optionsUser = (
    <div className="options">
      <button className="modal-button-delete" onClick={handleClick}>
        <p className="delete-button">Delete</p>
      </button>

      <div className="options-line" />

      <Link to={`/posts/${post.id}`}>
        <button onClick={handleCancel} className="modal-button">Go to post</button>
      </Link>

      <div className="options-line" />

      <button className="modal-button-cancel" onClick={handleCancel}>Cancel</button>
    </div>
    );

  const optionsNotUser = (
    <div className="options">

      <Link to={`/posts/${post.id}`}>
        <button onClick={handleCancel} className="modal-button-gtp">Go to post</button>
      </Link>

      <div className="options-line" />

      <button className="modal-button-cancel" onClick={handleCancel}>Cancel</button>
    </div>
  );

  return(
    <div>
    { currentUser.id === post.user_id ? optionsUser : optionsNotUser}
    </div>
  )
}

export default PostOptions;

