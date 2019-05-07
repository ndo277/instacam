import { RECEIVE_POSTS, RECEIVE_POST } from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_POSTS:
      return action.posts;  
    case RECEIVE_POST:
      const newState = {[action.post.id]: action.post};
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default postsReducer;

