import {connect} from 'react-redux';
import UserProfile from './user_profile';
import {fetchPosts} from '../actions/post_actions';
import {fetchUser} from '../actions/user_actions';
import {fetchLikes} from '../actions/like_actions';
import {fetchComments} from '../actions/comment_actions';
import {createFollow, fetchFollows, deleteFollow} from '../actions/follow_actions';

const selectPosts = (posts) => {
  return Object.keys(posts).reverse().map(id => posts[id]);
};

const selectLikes = (likes) => {
  return Object.values(likes);
};

const selectComments = (comments) => {
  return Object.values(comments);
};

const selectFollows = (follows) => {
  return Object.values(follows);
};

const mapStateToProps = (state, ownProps) => {
  const likes = selectLikes(state.entities.likes);
  const follows = selectFollows(state.entities.follows);
  const comments = selectComments(state.entities.comments);
  const currentUser = state.entities.users[state.session.id];
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];
  const posts = selectPosts(state.entities.posts);
  return {currentUser, userId, user, posts, likes, comments, follows};
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchLikes: () => dispatch(fetchLikes()),
  fetchComments: () => dispatch(fetchComments()),
  createFollow: (data) => dispatch(createFollow(data)),
  deleteFollow: (id) => dispatch(deleteFollow(id)),
  fetchFollows: () => dispatch(fetchFollows())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


