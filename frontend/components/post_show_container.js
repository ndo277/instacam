import { connect } from 'react-redux';
import {fetchPost} from '../actions/post_actions';
import {createComment} from '../actions/comment_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = state.entities.posts[postId];
  const currentUser = state.entities.users[state.session.id];
  return {postId, post, currentUser};
};

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  createComment: (data) => dispatch(createComment(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);