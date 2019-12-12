json.array! @videos do |video|
    json.extract! video, :id, :title, :description
    json.thumbnailUrl url_for(video.thumbnail)
    json.videoUrl url_for(video.video)
end