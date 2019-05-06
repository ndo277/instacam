json.set! @post.id do
  json.extract! @post, :id, :caption, :user_id
end
