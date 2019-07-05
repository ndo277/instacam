class Api::FollowsController < ApplicationController
  def index 
    @follows = Follow.all
    render :index
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end