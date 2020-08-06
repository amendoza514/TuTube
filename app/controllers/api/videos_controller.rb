class Api::VideosController < ApplicationController
    def show
        @video = Video.includes(comments: :user).find_by(id: params[:id])
        render :show
    end

    def index 
        @videos = Video.all 
        render :index
    end

    def search 
        search = params[:search].downcase[0...-1]
        @videos = Video.where("lower(title) LIKE :search OR lower(tags) LIKE :search", search: "%#{search}%").uniq
                            # where("lower(stores.name) LIKE :search OR lower(cars.name) LIKE :search", search: "%#{search.downcase}%").uniq   
        render :index
    end

    def video_params 
        params.require(:video).permit(:title, :description)
    end
end
