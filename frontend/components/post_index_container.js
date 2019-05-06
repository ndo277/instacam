import {connect} from 'react-redux';
import PostIndex from './post_index';
import {fetchPosts} from '../actions/post_actions';

const selectPosts = (posts) => {
  return Object.keys(posts).map(id => posts[id]);
}

const mapStateToProps = (state) => ({
  posts: selectPosts(state.entities.posts)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);