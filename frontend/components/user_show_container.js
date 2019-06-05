import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchPosts} from '../actions/post_actions';
import {fetchUser} from '../actions/user_actions';

const selectPosts = (posts) => {
  return Object.keys(posts).reverse().map(id => posts[id]);
};

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];
  const posts = selectPosts(state.entities.posts);
  // const userPosts = posts.filter(post => post.user_id === userId);
  return {currentUser, userId, user, posts};
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);


