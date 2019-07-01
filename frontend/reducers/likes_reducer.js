import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from '../actions/like_actions';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      const newState = { [action.like.id]: action.like };
      return Object.assign({}, state, newState);
    case REMOVE_LIKE:
      let nextState = Object.assign({}, state);
      delete nextState[action.likeId];
      return nextState;
    default:
      return state;
  }
};

export default likesReducer;