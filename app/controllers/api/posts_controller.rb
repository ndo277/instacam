class Api::PostsController < ApplicationController
  def index 
    @posts = Post.all 
    render :index
  end


  def create 
    @posts = Post.all
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
    @posts = Post.all
    @post = Post.find(params[:id])
    if @post.destroy
      render :index
    else
      render json: ["Unable to delete"], status: 404
    end

    
  end

  private

  def post_params 
    params.require(:post).permit(:caption, :photo)
  end


end