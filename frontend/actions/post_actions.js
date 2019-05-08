import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';


const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});

export const fetchPosts = () => (dispatch) => {
  return PostApiUtil.fetchPosts().then((posts) => dispatch(receivePosts(posts)));
};

export const fetchPost = (id) => (dispatch) => {
  return PostApiUtil.fetchPost(id).then((post) => dispatch(receivePost(post)));
};

export const createPost = (formData) => (dispatch) => {
  return PostApiUtil.createPost(formData).then((post) => dispatch(receivePost(post)));
};

export const deletePost = (id) => (dispatch) => {
  return PostApiUtil.deletePost(id).then((post) => dispatch(removePost(id)));
};



