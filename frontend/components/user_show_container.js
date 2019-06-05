import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchPosts} from '../actions/post_actions';
import {fetchUser} from '../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];
  return {currentUser, userId, user};
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);


