import {RECEIVE_COMMENT} from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_COMMENT:
      const newState = {[action.comment.id]: action.comment};
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default commentsReducer;