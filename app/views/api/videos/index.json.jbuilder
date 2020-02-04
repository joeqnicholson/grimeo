@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :user_id, :uploader, :plays, :likes
        json.thumbnailUrl url_for(video.thumbnail)
        json.videoUrl url_for(video.video_file)
    end
end