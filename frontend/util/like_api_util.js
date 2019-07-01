export const createLike = (data) => {
  return $.ajax({
    url: `/api/likes`,
    method: `POST`,
    data: data,
    error: (err) => console.log(err)
  });
};

export const fetchLike = (id) => {
  return $.ajax({
    url: `api/likes/${id}`,
    method: `GET`,
    error: (err) => console.log(err)
  });
};

export const fetchLikes = () => {
  return $.ajax({
    url: `api/likes/`,
    method: `GET`,
    error: (err) => console.log(err)
  });
};

export const deleteLike = (id) => {
  return $.ajax({
    url: `api/likes/${id}`,
    method: `DELETE`,
    error: (err) => console.log(err)
  });
};

