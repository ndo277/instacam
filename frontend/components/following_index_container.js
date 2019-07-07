import {connect} from 'react-redux';
import FollowingIndex from './following_index';

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];

  return {currentUser};
}; 

const mapDispatchToProps = (dispatch) => ({
  fetchFollows: () => dispatch(fetchFollows())
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndex);