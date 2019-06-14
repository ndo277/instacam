export const createComment = (data) => {
  return $.ajax({
    url: `api/posts/${data.comment.post_id}/comments`,
    method: `POST`,
    data: data,
    error: (err) => console.log(err)
  });
};