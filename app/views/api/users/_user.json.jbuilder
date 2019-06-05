json.extract! user, :id, :username, :display_name, :bio, :website
json.avatarUrl url_for(user.avatar)

