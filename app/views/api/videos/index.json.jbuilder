# json.array! @videos do |video|
#     json.set! video.id do
#         json.extract! video, :id, :title
#         # json.videoUrl url_for(video.video)
#     end
# end

@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description
        # json.videoUrl url_for(video.video)
    end
end