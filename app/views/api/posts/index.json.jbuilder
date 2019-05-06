@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :caption, :user_id
  end
  # json.photoUrl url_for(post.photo)
end