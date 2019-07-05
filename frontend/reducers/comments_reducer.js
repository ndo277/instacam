import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      const newState = {[action.comment.id]: action.comment};
      return Object.assign({}, state, newState);
    case REMOVE_COMMENT:
      let nextState = Object.assign({}, state);
      delete nextState[action.commentId];
      return nextState;
    default:
      return state;
  }
};

export default commentsReducer;