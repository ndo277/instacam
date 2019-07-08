import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
}); 

export const fetchUsers = () => (dispatch) => {
  return UserApiUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)));
};

export const fetchUser = (id) => (dispatch) => {
  return UserApiUtil.fetchUser(id).then((user) => dispatch(receiveUser(user)));
};

export const updateUser = (user) => (dispatch) => {
  return UserApiUtil.updateUser(user).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateUserAvatar = (id, data) => (dispatch) => {
  return UserApiUtil.updateUserAvatar(id, data).then((user) => dispatch(receiveUser(user)));
};