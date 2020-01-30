import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, deleteVideo, fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions';
import { deleteComment, createComment, fetchComments, updateComment } from '../../actions/comment_actions';

const msp=(state, ownProps)=>{
    const id = state.session.id;
    const user = state.entities.users[id];
    
    return({
        video: state.entities.videos[ownProps.match.params.videoId],
        videos: Object.values(state.entities.videos),
        currentUser: user,
        comments: Object.values(state.entities.comments),
    });
}
const mdp=dispatch=>({
    fetchVideo: videoId=>dispatch(fetchVideo(videoId)),
    fetchUser: userId=>dispatch(fetchUser(userId)),
    fetchVideos: ()=>dispatch(fetchVideos()),
    fetchComments: ()=>dispatch(fetchComments()),
    deleteVideo: videoId=>dispatch(deleteVideo(videoId)),
    deleteComment: commentId=>dispatch(deleteComment(commentId)),
    createComment: comment=>dispatch(createComment(comment)),
    updateComment: comment=>dispatch(updateComment(comment))
})
export default connect(msp,mdp)(VideoShow)