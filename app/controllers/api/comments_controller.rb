class Api::CommentsController < ApplicationController
  
  def create 
  end

  def update 
  end

  def destroy 
  end

  def comment_params 
    params.require(:comment).permit(:content)  
  end
end

# Even though I'm not rendering a specifc comment page, the front end still has no way of grabbing this information until Ive selected it?