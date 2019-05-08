json.extract! @post, :id, :caption, :user_id 
json.photoUrl url_for(@post.photo)
json.avatarUrl url_for(@post.user.avatar)
json.username @post.user.username

