class Api::VideosController < ApplicationController
    def show
        @video = Video.find(params[:id])
        render :show
    end
    def index
        @videos = Video.all
        render :index
    end
end