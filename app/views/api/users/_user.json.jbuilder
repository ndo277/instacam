json.extract! user, :id, :username
json.avatarUrl url_for(user.avatar)
json.posts user.posts