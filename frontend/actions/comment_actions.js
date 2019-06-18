import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

export const createComment = (data) => (dispatch) => {
  return CommentApiUtil.createComment(data).then((comment) => dispatch(receiveComment(comment)));
};

export const fetchComment = (id) => (dispatch) => {
  return CommentApiUtil.fetchComment(id).then((comment) => dispatch(receiveComment(comment)));
};

export const deleteComment = (id) => (dispatch) => {
  return CommentApiUtil.deleteComment(id).then((comment) => dispatch(removeComment(id)));
};