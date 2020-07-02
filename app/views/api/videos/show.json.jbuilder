# json.extract! @video, :id, :title, :description, :user_id, :category, :tags, :views
# json.videoUrl url_for(@video.video) if @video.video.attached?
# json.thumbUrl url_for(@video.thumbnail) if @video.thumbnail.attached?
# json.user @video.user.email
# json.userColor @video.user.icon_color
# json.user_verified @video.user.verified

preview_ids = []

json.video do
        json.partial! 'video', video: @video
        json.preview_ids preview_ids
end

json.comments do 
        @video.comments.each do |comment|
                json.set! comment.id do 
                       json.extract!  comment, :content, :user_id, :video_id, :id
                       json.user comment.user.email
                       json.userColor comment.user.icon_color
                       json.createdAt comment.created_at.strftime("%d %b %Y")
                end
        end
end

json.previews Video.previews(@video.id).map do |video|
                json.extract! video, :id, :title, :description, :user_id, :category, :tags, :views
                json.videoUrl url_for(video.video) if video.video.attached?
                # dont necessarily need ^
                json.thumbUrl url_for(video.thumbnail) if video.thumbnail.attached?
                json.user video.user.email
                json.userColor video.user.icon_color
                json.user_verified video.user.verified
                preview_ids << video.id
end