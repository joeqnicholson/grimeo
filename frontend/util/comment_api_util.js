export const fetchComments=videoId=>(
    $.ajax({
        type: `GET`,
        url: `/api/videos`,
    })
);
export const fetchComment=commentId=>(
    $.ajax({
        method: 'GET',
        url: `api/videos/${commentId}`,
    })
);
export const addComment=comment=>(
    $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: { comment }
    })
);
export const deleteComment=commentId=>(
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
);