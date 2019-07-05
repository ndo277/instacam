export const createComment = (data) => {
  return $.ajax({
    url: `/api/comments`,
    method: `POST`,
    data: data,
    error: (err) => console.log(err)
  });
};

export const fetchComments = () => {
  return $.ajax({
    url: `api/comments/`,
    method: `GET`,
    error: (err) => console.log(err)
  });
};

export const fetchComment = (id) => {
  return $.ajax({
    url: `api/comments/${id}`,
    method: `GET`,
    error: (err) => console.log(err)
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    url: `api/comments/${id}`,
    method: `DELETE`,
    error: (err) => console.log(err)
  });
};