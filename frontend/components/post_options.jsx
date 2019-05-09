import React from 'react';
import { Link } from 'react-router-dom';
import {deletePost} from '../actions/post_actions';

const PostOptions = (props) => {

  // const handleClick = () => {
  //   debugger
  //   e.preventDefault();
  //   dispatch(deletePost(props.post.id));
  // }

  return(
    <div>
      <h3>MODAL</h3>
      {/* <button className="delete-button" onClick={handleClick}>Delete</button>
      <Link to={`/posts/${props.post.id}`}>
        <button>Go to post</button>
      </Link> */}
    </div>
  )
}

export default PostOptions;

