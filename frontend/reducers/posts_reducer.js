import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_POSTS:
      return action.posts;  
    case RECEIVE_POST:
      const newState = {[action.post.id]: action.post};
      return Object.assign({}, state, newState);
    case REMOVE_POST:
      let nextState = Object.assign({}, state);
      delete nextState[action.postId];
      return nextState;
    default:
      return state;
  }
};

export default postsReducer;

