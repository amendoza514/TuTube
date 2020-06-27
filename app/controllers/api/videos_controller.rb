class Api::VideosController < ApplicationController
    def show
        @video = Video.find_by(params[:id])
        render :show
    end

    def index 
        @videos = Video.all 
        render :index
    end

    def video_params 
        params.require(:video).permit(:title, :description)
    end
end
