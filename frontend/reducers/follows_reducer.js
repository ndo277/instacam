import { RECEIVE_FOLLOW, RECEIVE_FOLLOWS, REMOVE_FOLLOW } from '../actions/follow_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW:
      const newState = { [action.follow.id]: action.follow };
      return Object.assign({}, state, newState);
    case REMOVE_FOLLOW:
      let nextState = Object.assign({}, state);
      delete nextState[action.followId];
      return nextState;
    default:
      return state;
  }
};

export default followsReducer;