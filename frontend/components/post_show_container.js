import { connect } from 'react-redux';
import {fetchPost} from '../actions/post_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = state.entities.posts[postId];
  return {postId, post};
};

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);