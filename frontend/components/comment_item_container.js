import { connect } from 'react-redux';
import CommentItem from './comment_item';
import {fetchComment} from '../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  return {currentUser};
};

const mapDispatchToProps = (dispatch) => ({
  fetchComment: (id) => dispatch(fetchComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);