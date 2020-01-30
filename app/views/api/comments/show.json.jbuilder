json.extract! @comment, :id, :body, :user_id, :video_id, :user
json.username @comment.user.username
