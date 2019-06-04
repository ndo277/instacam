import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchPosts} from '../actions/post_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);


