import {connect} from 'react-redux';
import FollowingIndex from './following_index';
import {fetchFollows} from '../actions/follow_actions';
import {fetchUsers} from '../actions/user_actions';

const selectUsers = (users) => {
  return Object.values(users);
};

const selectFollows = (follows) => {
  return Object.values(follows);
};

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  const users = selectUsers(state.entities.users);
  const follows = selectFollows(state.entities.follows);

  return {currentUser, users, follows};
}; 

const mapDispatchToProps = (dispatch) => ({
  fetchFollows: () => dispatch(fetchFollows()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndex);