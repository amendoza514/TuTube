# json.comment do 
#      json.set! @comment.id do 
#         json.extract! @comment, :id, :content, :user_id
#         json.likes @comment.likes
#         # json.likes do 
#         #         json.counter @comment.count_likes
#         #         json.likers @comment.likers 
#         # end
#      end
# end

json.extract!  @comment, :content, :user_id, :video_id, :id
json.user @comment.user.email
json.userColor @comment.user.icon_color
# json.createdAt @comment.created_at.strftime("%d %b %Y")
json.created_at @comment.created_at.to_s
json.likes @comment.likes
