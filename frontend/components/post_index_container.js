import {connect} from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts, deletePost} from '../actions/post_actions';

const selectPosts = (posts) => {
  return Object.keys(posts).reverse().map(id => posts[id]);
};

const mapStateToProps = (state) => ({
  posts: selectPosts(state.entities.posts)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (id) => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);