class Api::FollowsController < ApplicationController
  def index 
    @follows = Follow.all
    render :index
  end

  def create 
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id  
    
    if @follow.save 
      render json: ['Follow created']
    else
      render json: @follow.errors.full_messages, status: 422
    end
    
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end