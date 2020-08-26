class Api::VideosController < ApplicationController
    def show
        @video = Video.includes(comments: :user).find_by(id: params[:id])
        @previews = Video.previews(@video.id)
        # debugger
        @video.update(views: @video.views + 1)
        render :show
    end

    def index 
        @videos = Video.all
        render :index
    end

    def search 
        search = params[:search].downcase[0...-1]
        @videos = Video.where("lower(title) LIKE :search OR lower(array_to_string(tags, '||')) LIKE :search  OR lower(category) LIKE :search", search: "%#{search}%").uniq
        render :index
    end

    def video_params 
        params.require(:video).permit(:title, :description)
    end
end
