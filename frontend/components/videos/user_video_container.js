import { connect } from 'react-redux';
import VideoUpload from './video_upload';
import { deleteVideo, fetchVideo, fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions';
import UserVideo from './user_video.jsx'

export const msp=(state,ownProps)=>{
    const id = state.session.id;
    const user = state.entities.users[id];
    
    const videos = Object.values(state.entities.videos);
    // const userVideos = videos.filter(video=>video.user_id === state.entities.users[ownProps.match.params.userId].id)


    ;
    return {
      id: ownProps.match.params.userId,
      currentUser: user,
      userPage: state.entities.users[ownProps.match.params.userId],
      videos: videos
    };
}

const mdp=dispatch=>({
    fetchVideos:()=>dispatch(fetchVideos()),
    fetchVideo:(videoId)=>dispatch(fetchVideo(videoId)),
    fetchUser:(userId)=>dispatch(fetchUser(userId)),
    deleteVideo:(videoId)=>dispatch(deleteVideo(videoId))
})
export default connect(msp,mdp)(UserVideo);