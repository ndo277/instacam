import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../actions/post_actions';
import PostForm from './post_form';

const mapDispatchToProps = (dispatch) => ({
  createPost: (data) => dispatch(createPost(data)),
  fetchPosts: (posts) => dispatch(fetchPosts(posts))
});

export default connect(null, mapDispatchToProps)(PostForm);
