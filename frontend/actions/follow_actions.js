import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow
});

const receiveFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows
});

const removeFollow = (followId) => ({
  type: REMOVE_FOLLOW,
  followId
});

export const createFollow = (data) => (dispatch) => {
  return FollowApiUtil.createFollow(data).then((follow) => dispatch(receiveFollow(follow)));
};

export const fetchFollow = (id) => (dispatch) => {
  return FollowApiUtil.fetchFollow(id).then((follow) => dispatch(receiveFollow(follow)));
};

export const fetchFollows = () => (dispatch) => {
  return FollowApiUtil.fetchFollows().then((follows) => dispatch(receiveFollows(follows)));
};

export const deleteFollow = (id) => (dispatch) => {
  return FollowApiUtil.deleteFollow(id).then((follow) => dispatch(removeFollow(id)));
};