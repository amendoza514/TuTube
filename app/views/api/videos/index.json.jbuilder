@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :user_id, :category, :tags, :views
        json.videoUrl url_for(video.video) if video.video.attached?
        json.thumbUrl url_for(video.thumbnail) if video.thumbnail.attached?
        json.user video.user.email
        json.userColor video.user.icon_color
        json.user_verified video.user.verified
        json.likes video.likes
        json.created_at video.created_at.to_s
    end
end
