@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :caption, :user_id
    json.photoUrl url_for(post.photo)
    json.username post.user.username
    json.avatarUrl url_for(post.user.avatar)
    json.likes do 
      json.array! post.likes do |like|
        json.extract! like, :id, :user_id, :post_id
      end
    end
  end

end