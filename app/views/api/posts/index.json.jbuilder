@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :caption, :user_id
    json.photoUrl url_for(post.photo)
    json.username post.user.username
    json.avatarUrl url_for(post.user.avatar)
  end
end