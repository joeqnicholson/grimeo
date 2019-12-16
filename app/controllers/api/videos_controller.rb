class Api::VideosController < ApplicationController
    def show
        @video = Video.find(params[:id])
        render :show
    end
    def index
        @videos = Video.all
        render :index
    end
    def destroy
        @post = Video.find(params[:id])
        if @video.destroy
          render :show
        else
          render json: @video.errors.full_messages, status: 422
        end
    end
    def create
        @video = Video.new(video_params)
    
        if @video.save
          render :show
        else
          render json: @video.errors.full_messages, status: 422
        end
    end
    def update
        @video = Video.find(params[:id])
    
        if @video.update(video_params)
          render :show
        else
          render json: @video.errors.full_messages, status: 422
        end
    end
    private
    def video_params
        params.require(:video).permit(:title, :description, :user_id)
    end

end