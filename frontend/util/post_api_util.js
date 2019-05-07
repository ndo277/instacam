export const fetchPosts = () => {
  return $.ajax({
    url: `api/posts`,
    method: `GET`, 
    error: (err) => console.log(err)
  });
};

export const createPost = (formData) => {
  return $.ajax({
    url: `api/posts`,
    method: `POST`, 
    data: formData,
    contentType: false,
    processData: false,
    error: (err) => console.log(err)
  });
};

