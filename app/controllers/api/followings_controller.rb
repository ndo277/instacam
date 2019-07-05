class Api::FollowingsController < ApplicationController
  def index 
    @followings = Following.all
    render :index
  end

  private

  def following_params
    params.require(:following).permit(:followee_id)
  end
end