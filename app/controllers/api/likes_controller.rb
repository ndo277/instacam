class Api::LikesController < ApplicationController
  def index 
    @likes = Like.all 
    render :index
  end

  def show 
    @like = Like.find(params[:id])
    render :show 
  end

  def create 
    @like = Like.new(like_params)
    @like.user_id = current_user.id  

    if @like.save 
      render :show 
    else
      render json: @like.errors.full_messages, status: 422
    end

  end

  def destroy 
    @like = Like.find(params[:id])
    if @like.destroy
      render json: ["Like removed"]
    else
      render json: ["Unable to remove like"], status: 404
    end
  end

  private 

  def like_params 
    params.require(:like).permit(:post_id)
  end
end