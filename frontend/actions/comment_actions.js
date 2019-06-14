import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const createComment = (data) => (dispatch) => {
  return CommentApiUtil.createComment(data).then((comment) => dispatch(receiveComment(comment)));
};