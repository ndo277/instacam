import {connect} from 'react-redux';
import UserProfile from './user_profile';
import {fetchPosts} from '../actions/post_actions';
import {fetchUser} from '../actions/user_actions';
import {fetchLikes} from '../actions/like_actions';

const selectPosts = (posts) => {
  return Object.keys(posts).reverse().map(id => posts[id]);
};

const selectLikes = (likes) => {
  return Object.values(likes);
};

const mapStateToProps = (state, ownProps) => {
  const likes = selectLikes(state.entities.likes);
  const currentUser = state.entities.users[state.session.id];
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];
  const posts = selectPosts(state.entities.posts);
  return {currentUser, userId, user, posts, likes};
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchLikes: () => dispatch(fetchLikes())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


