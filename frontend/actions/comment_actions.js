import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchComments = () => (dispatch) => {
  return CommentApiUtil.fetchComments().then((comments) => dispatch(receiveComments(comments)));
};

export const createComment = (data) => (dispatch) => {
  return CommentApiUtil.createComment(data).then((comment) => dispatch(receiveComment(comment)));
};

export const fetchComment = (id) => (dispatch) => {
  return CommentApiUtil.fetchComment(id).then((comment) => dispatch(receiveComment(comment)));
};

export const deleteComment = (id) => (dispatch) => {
  return CommentApiUtil.deleteComment(id).then((comment) => dispatch(removeComment(id)));
};