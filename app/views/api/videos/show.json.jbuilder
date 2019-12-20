json.extract! @video, :id, :title, :description, :user_id, :uploader, :comments, :plays
json.thumbnailUrl url_for(@video.thumbnail)
json.videoUrl url_for(@video.video_file)