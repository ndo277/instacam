import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUser = (id) => (dispatch) => {
  return UserApiUtil.fetchUser(id).then((user) => dispatch(receiveUser(user)));
};

export const updateUser = (user) => (dispatch) => {
  return UserApiUtil.updateUser(user).then((user) => dispatch(receiveUser(user)));
};

export const updateUserAvatar = (id, data) => (dispatch) => {
  return UserApiUtil.updateUserAvatar(id, data).then((user) => dispatch(receiveUser(user)));
};