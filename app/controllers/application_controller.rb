class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token

  helper_method :current_user, :logged_in?

  def log_in!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end
  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by_session_token(session[:session_token])
  end
  def logged_in?
    !!current_user
  end
  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
  def require_log_in
    redirect_to new_session_url unless logged_in?
  end


end
