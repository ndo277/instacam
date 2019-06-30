json.extract! @post, :id, :caption, :user_id 
json.photoUrl url_for(@post.photo)
json.avatarUrl url_for(@post.user.avatar)
json.username @post.user.username

json.comments do    
  json.array! @post.comments do |comment|   
    json.extract! comment, :id, :body, :post_id, :user_id
    json.username comment.user.username
    json.avatarUrl url_for(comment.user.avatar)
  end
end