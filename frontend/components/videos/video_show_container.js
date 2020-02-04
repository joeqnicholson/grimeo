import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, deleteVideo, fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions';
import { deleteComment, createComment, fetchComments, updateComment } from '../../actions/comment_actions';
import { deleteLike, createLike } from '../../actions/like_actions';

const msp=(state, ownProps)=>{
    const id = state.session.id;
    const user = state.entities.users[id];

    return({
        video: state.entities.videos[ownProps.match.params.videoId],
        videos: Object.values(state.entities.videos).slice(0,8).filter(video => video.id != ownProps.match.params.videoId),
        currentUser: user,
        comments: Object.values(state.entities.comments),
        users: state.entities.users,
        likes: state.entities.likes
    });
}

const mdp=dispatch=>({
    fetchVideo: videoId=>dispatch(fetchVideo(videoId)),
    fetchUser: userId=>dispatch(fetchUser(userId)),
    fetchVideos: ()=>dispatch(fetchVideos()),
    fetchComments: ()=>dispatch(fetchComments()),
    deleteLike: likeId=>dispatch(deleteLike(likeId)),
    createLike: like=>dispatch(createLike(like)),
    deleteVideo: videoId=>dispatch(deleteVideo(videoId)),
    deleteComment: commentId=>dispatch(deleteComment(commentId)),
    createComment: comment=>dispatch(createComment(comment)),
    updateComment: comment=>dispatch(updateComment(comment))
})
export default connect(msp,mdp)(VideoShow)

