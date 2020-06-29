json.extract! @video, :id, :title, :description, :user_id, :category, :tags, :views
json.videoUrl url_for(@video.video) if @video.video.attached?
json.thumbUrl url_for(@video.thumbnail) if @video.thumbnail.attached?
json.user @video.user.email


        # json.user video.user.email