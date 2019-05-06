export const fetchPosts = () => {
  return $.ajax({
    url: `api/posts`,
    method: `GET`, 
    error: (err) => console.log(err)
  });
};

