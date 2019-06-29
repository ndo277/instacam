import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId
});

export const createLike = (data) => (dispatch) => {
  return LikeApiUtil.createLike(data).then((like) => dispatch(receiveLike(like)));
};

export const fetchLike = (id) => (dispatch) => {
  return LikeApiUtil.fetchLike(id).then((like) => dispatch(receiveLike(like)));
};

export const deleteLike = (id) => (dispatch) => {
  return LikeApiUtil.deleteLike(id).then((like) => dispatch(removeLike(id)));
};