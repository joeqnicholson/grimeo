export const fetchLikes=videoId=>(
    $.ajax({
        type: `GET`,
        url: `/api/videos`,
    })
);
export const fetchLike=likeId=>(
    $.ajax({
        method: 'GET',
        url: `api/videos/${likeId}`,
    })
)
export const addLike=like=>(
    $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: { like }
    })
);
export const removeLike=likeId=>(
    $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
);