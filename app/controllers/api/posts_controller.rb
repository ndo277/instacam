class Api::PostsController < ApplicationController
  def index 
    @posts = Post.all 
    render :index
  end


  def create 
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save 
      render :index 
    else
      render json: @post.errors.full_messages, status: 422
    end
  end


  def update 

  end


  def destroy 

  end

  private

  def post_params 
    params.require(:post).permit(:caption)
  end


end