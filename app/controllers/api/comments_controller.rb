class Api::CommentsController < ApplicationController

    def show
        @comment = Comment.find_by_id(params[:id])
        render :show
    end

    def index 
        @comments = Comment.all
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by_id(params[:id])
        
        if @comment.update_attributes(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end

    end

    def destroy
        @comment = Comment.find_by_id(params[:id])
        
        if @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end


  
    private
    def comment_params
      params.require(:comment).permit(:body, :user_id, :video_id)
    end
  end
  