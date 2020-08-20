class Api::LikesController < ApplicationController
    def index
      if params[:video_id].present?
        @likes = Video.find(params[:video_id]).likes
      elsif params[:comment_id].present?
        @likes = Comment.find(params[:comment_id]).likes
      end
    end

    def create 
      @user = current_user

        if params[:video_id].present?
          @video = Video.find(params[:video_id])
          @previews = Video.previews(@video.id)
          @like = Like.new({
          user_id: @user.id, 
          like: params[:like],
          likeable_id: params[:video_id],
          likeable_type: "Video"
        })

          if @like.save! 
            render :video
          end

        elsif params[:comment_id].present?
          @comment = Comment.find(params[:comment_id])
          @like = Like.new({
          user_id: @user.id, 
          like: params[:like],
          likeable_id: params[:comment_id],
          likeable_type: "Comment"
         })

          if @like.save! 
            render :comment
          end
         end
    end 

    def destroy 
        if params[:type] == "Comment"
            @like = Like.find(params[:like_id])
            @like.destroy
            @comment = Comment.find(params[:comment_id])
            render :comment
        else
            @like = Like.find(params[:id])
            @like.destroy
            @video = Video.find(params[:video_id])
            @previews = Video.previews(@video.id)
            render :video
        end
    end
# 
    def like_params
        params.require(:like).permit(:user_id, :likeable_id, :likeable_type)
    end
end
