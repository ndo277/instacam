import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = (state) => ({
  posts: state.entities.posts
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (data) => dispatch(createPost(data)),
  fetchPosts: (posts) => dispatch(fetchPosts(posts))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
