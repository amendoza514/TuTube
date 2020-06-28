# json.array! @videos do |video|
#     json.set! video.id do
#         json.extract! video, :id, :title
#         json.videoUrl url_for(video.video)
#     end
# end

@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :user_id, :category, :tags
        json.videoUrl url_for(video.video) if video.video.attached?
        # json.user video.user.email
        #does this correspond to the key that I set in the video.rb?
    end
end