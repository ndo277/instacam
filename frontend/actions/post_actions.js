import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';


const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const fetchPosts = () => (dispatch) => {
  return PostApiUtil.fetchPosts().then((posts) => dispatch(receivePosts(posts)));
};

export const createPost = (formData) => (dispatch) => {
  return PostApiUtil.createPost(formData).then((post) => dispatch(receivePost(post)));
};

