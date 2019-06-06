class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show 
    @user = User.find(params[:id])
    render :show
  end

  def update 
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show 
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :display_name, :bio, :website, :avatar, :id)
  end

end
