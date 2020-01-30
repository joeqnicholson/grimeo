class Api::LikesController < ApplicationController

    def show

    end

    def create


    end

    def destroy

    end

    private

    def like_params
        params.require(:user).permit(:username, :password, :videos) 
    end


end