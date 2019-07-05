import { connect } from 'react-redux';
import {fetchPost} from '../actions/post_actions';
import {createComment} from '../actions/comment_actions';
import {createLike, fetchLikes, deleteLike} from '../actions/like_actions';
import PostShow from './post_show';

const selectLikes = (likes) => {
  return Object.values(likes);
};

const mapStateToProps = (state, ownProps) => {
  const likes = selectLikes(state.entities.likes);
  const postId = ownProps.match.params.postId;
  const post = state.entities.posts[postId];
  const currentUser = state.entities.users[state.session.id];
  return {postId, post, currentUser, likes};
};

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  createComment: (data) => dispatch(createComment(data)),
  createLike: (data) => dispatch(createLike(data)),
  deleteLike: (id) => dispatch(deleteLike(id)),
  fetchLikes: () => dispatch(fetchLikes()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);