class Api::SessionsController < ApplicationController

  def create
     @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      # flash.now[:errors] = ['Invalid credentials']
      render json: ['Invalid credentials'], status: 422
    else
      log_in!(@user)
      render 'api/users/show';
    end
  end


  def destroy
    if !current_user
      render json: ['You no do that!'], status: 404
    else
      log_out!
      render json: {}
    end
  end



end
