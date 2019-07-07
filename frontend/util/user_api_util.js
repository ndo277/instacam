export const fetchUser = (id) => {
  return $.ajax({
    url: `api/users/${id}`,
    method: 'GET',
    error: (err) => console.log(err)
  });
};

export const fetchUsers = () => {
  return $.ajax({
    url: `api/users/`,
    method: 'GET',
    error: (err) => console.log(err)
  });
};

export const updateUser = (user) => {
  return $.ajax({
    url: `api/users/${user.id}`,
    method: `PATCH`,
    data: { user },
  });
};

export const updateUserAvatar = (id, data) => {
  return $.ajax({
    url: `api/users/${id}`,
    method: `PATCH`,
    data: data,
    contentType: false,
    processData: false
  });
};
