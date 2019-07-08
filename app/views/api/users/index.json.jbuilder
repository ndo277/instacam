@users.each do |user|
  json.set! user.id do   
    json.extract! user, :id, :username, :display_name
    json.avatarUrl url_for(user.avatar)
  end
end