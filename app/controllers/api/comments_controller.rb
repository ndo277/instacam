class Api::CommentsController < ApplicationController
  def create 
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.post_id = params[:post_id]

    if @comment.save
      render :show 
    else
      render json: @comment.errors.full_messages, status: 422
    end
    
  end

  private 

  def comment_params
    params.require(:comment).permit(:body)
  end
end