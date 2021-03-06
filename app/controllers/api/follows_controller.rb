class Api::FollowsController < ApplicationController
  def index 
    @follows = Follow.all
    render :index
  end

  def show 
    @follow = Follow.find(params[:id])
    render :show
  end

  def create 
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id  
    
    if @follow.save 
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end

  end

  def destroy 
    @follow = Follow.find(params[:id])
    
    if @follow.destroy 
      render json: ["Follow removed"]
    else
      render json: ["Unable to remove follow"], status: 404
    end

  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end