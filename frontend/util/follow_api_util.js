export const createFollow = (data) => {
  return $.ajax({
    url: `/api/follows`,
    method: `POST`,
    data: data,
    error: (err) => console.log(err)
  });
};

export const fetchFollow = (id) => {
  return $.ajax({
    url: `api/follows/${id}`,
    method: `GET`,
    error: (err) => console.log(err)
  });
};

export const fetchFollows = () => {
  return $.ajax({
    url: `api/follows/`,
    method: `GET`,
    error: (err) => console.log(err)
  });
};

export const deleteFollow = (id) => {
  return $.ajax({
    url: `api/follows/${id}`,
    method: `DELETE`,
    error: (err) => console.log(err)
  });
};
