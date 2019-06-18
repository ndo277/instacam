json.extract! @comment, :id, :body, :user_id, :post_id
json.avatarUrl url_for(@comment.user.avatar)
json.username @comment.user.username
