export const createComment = (data) => {
  return $.ajax({
    url: `/api/comments`,
    method: `POST`,
    data: data,
    error: (err) => console.log(err)
  });
};