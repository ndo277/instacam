import { connect } from 'react-redux';
import CommentItem from './comment_item';
import {fetchComment} from '../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  // const comment = state.entities.comments[ownProps.commentItem.id];
  // debugger
  // return {comment};
};

const mapDispatchToProps = (dispatch) => ({
  fetchComment: (id) => dispatch(fetchComment(id)),
});

export default connect(null, mapDispatchToProps)(CommentItem);