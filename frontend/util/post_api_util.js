export const fetchPosts = () => {
  return $.ajax({
    url: `api/posts`,
    method: `GET`, 
    error: (err) => console.log(err)
  });
};

export const fetchPost = (id) => {
  return $.ajax({
    url: `api/posts/${id}`,
    method: `GET`, 
    error: (err) => console.log(err)
  });
};

export const deletePost = (id) => {
  return $.ajax({
    url: `api/posts/${id}`,
    method: `DELETE`, 
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

