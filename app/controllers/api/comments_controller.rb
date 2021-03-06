class Api::CommentsController < ApplicationController
  
  def create 
    @comment = Comment.new(comment_params)

    if @comment.save
      render :create
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update 
    @comment = Comment.find_by(user_id: comment_params[:user_id])
    if @comment && @comment.update(content: comment_params[:content])
      render :create
    else
      # render json: @event.errors.full_messages, status: 422
      render json: ["Can't update this comment"], status: 422
    end
  end

  def destroy 
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  def comment_params 
    params.require(:comment).permit(:content, :user_id, :video_id)  
  end
end

# Even though I'm not rendering a specifc comment page, the front end still has no way of grabbing this information until Ive selected it?