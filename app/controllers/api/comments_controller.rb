class Api::CommentsController < ApplicationController
  def show 
    @comment = Comment.find(params[:id])
    render :show 
  end
  
  def create 
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    

    if @comment.save
      render :show 
    else
      render json: @comment.errors.full_messages, status: 422
    end
    
  end

  def destroy 
    @comment = Comment.find(params[:id])
    if @comment.destroy 
      render json: ["Comment deleted"]
    else 
      render json: ['Unable to delete'], status: 404
    end 

  end

  private 

  def comment_params
    params.require(:comment).permit(:body, :post_id,:id)
  end
end