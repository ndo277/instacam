json.extract! user, :id, :username, :display_name, :bio, :website
json.avatarUrl url_for(user.avatar)
json.posts do   
  json.array! user.posts do |post| 
    json.extract! post, :id, :user_id, :caption
    json.photoUrl url_for(post.photo)
  end
end
json.followers do   
  json.array! user.followers do |follower| 
    json.extract! follower, :id, :username, :display_name
    json.avatarUrl url_for(follower.avatar)
  end
end

json.followees do   
  json.array! user.followees do |followee| 
    json.extract! followee, :id, :username, :display_name
    json.avatarUrl url_for(followee.avatar)
  end
end

