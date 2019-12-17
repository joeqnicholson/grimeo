export const fetchVideos=()=>(
    $.ajax({
      url: `api/videos/`
    })
  );
  
  export const fetchVideo=videoId=>(
    $.ajax({
      url: `api/videos/${videoId}`
    })
  );
  
  export const createVideo=formData=>(
    $.ajax({
          url: "/api/videos",
          method: 'POST',
          data: formData,
          contentType: false,
          processData: false
      })
  );
  
  export const updateVideo=video=>(
    $.ajax({
      url: `api/videos/${video.id}`,
      method: 'patch',
      data: { video }
    })
  );
  
  export const deleteVideo=videoId=>(
    $.ajax({
      url: `api/videos/${videoId}`,
      method: 'DELETE'
    })
  )