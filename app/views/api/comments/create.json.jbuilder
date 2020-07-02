json.extract! @comment, :content, :user_id, :video_id, :id
json.user @comment.user.email
json.userColor @comment.user.icon_color
