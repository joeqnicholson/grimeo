json.video do 
json.extract! @video, :id, :title, :description, :user_id, :uploader, :plays, :comment_ids, :likes
json.thumbnailUrl url_for(@video.thumbnail)
json.videoUrl url_for(@video.video_file)
end
json.comments do @video.comments .each do |comment|
    json.set! comment.id , comment
    
    end
end
json.users do @video.comment_users.each do |user|
    json.set! user.id , user
    end
end
json.likes do @video.likes.each do |like|
    json.set! like.id , like
    end
end
