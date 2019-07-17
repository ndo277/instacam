class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def login(user)
    session[:session_token] = user.reset_session_token
  end

  def current_user
    @current_user = User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token if current_user
    session[:session_token] = nil
    @current_user = nil 
  end

  def require_logged_in
    unless logged_in?
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

end
