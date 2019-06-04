import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchPosts} from '../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const userId = ownProps.match.params.userId;
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);


