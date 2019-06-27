import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = (state) => {
  const posts = state.entities.posts;
  const postsArr = Object.keys(posts).map(id => posts[id]);
  const newest = postsArr[postsArr.length - 1];
  const currentUser = state.entities.users[state.session.id];
  return {posts, newest, currentUser};
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (data) => dispatch(createPost(data)),
  fetchPosts: (posts) => dispatch(fetchPosts(posts))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
