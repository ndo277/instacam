import { connect } from 'react-redux';
import UserEdit from './user_edit';
import {fetchUser} from '../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  return {currentUser};
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);