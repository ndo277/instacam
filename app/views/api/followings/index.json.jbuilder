@followings.each do |following|
  json.set! following.id do
    json.extract! following, :id, :follower_id, :followee_id
  end
end