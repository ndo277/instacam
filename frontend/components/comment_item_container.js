import { connect } from 'react-redux';
import CommentItem from './comment_item';
import {fetchComment} from '../actions/comment_actions';

// const mapStateToProps = (state, ownProps) => {
//   return {};
// };

const mapDispatchToProps = (dispatch) => ({
  fetchComment: (id) => dispatch(fetchComment(id)),
});

export default connect(null, mapDispatchToProps)(CommentItem);