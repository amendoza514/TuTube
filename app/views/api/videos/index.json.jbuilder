# json.array! @videos do |video|
#     json.set! video.id do
#         json.extract! video, :id, :title
#         json.videoUrl url_for(video.video)
#     end
# end

@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :user_id, :tags, :category, :views
        json.videoUrl url_for(video.video) if video.video.attached?
        json.thumbUrl url_for(video.thumbnail) if video.thumbnail.attached?
        json.user video.user.email
        json.userColor video.user.icon_color
        json.user_verified video.user.verified
    end
end

