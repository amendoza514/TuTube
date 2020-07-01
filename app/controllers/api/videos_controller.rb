class Api::VideosController < ApplicationController
    def show
        @video = Video.includes(comments: :user).find_by(id: params[:id])
        render :show
    end
    #

    def index 
        @videos = Video.all 
        render :index
    end

    def video_params 
        params.require(:video).permit(:title, :description)
    end
end
