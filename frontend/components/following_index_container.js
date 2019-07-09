import {connect} from 'react-redux';
import FollowingIndex from './following_index';
import {createFollow, deleteFollow} from '../actions/follow_actions';


const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  return {currentUser};
}; 

const mapDispatchToProps = (dispatch) => ({
  createFollow: (data) => dispatch(createFollow(data)),
  deleteFollow: (id) => dispatch(deleteFollow(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndex);