require 'test_helper'

class Api::CommentsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

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
