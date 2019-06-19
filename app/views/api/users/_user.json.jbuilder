json.extract! user, :id, :username, :display_name, :bio, :website
json.avatarUrl url_for(user.avatar)
json.posts do   
  json.array! user.posts do |post| 
    json.extract! post, :id, :user_id, :caption
    json.photoUrl url_for(post.photo)
  end
end
