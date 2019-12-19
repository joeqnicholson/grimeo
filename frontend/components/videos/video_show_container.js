import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, deleteVideo, fetchVideos } from '../../actions/video_actions';

const msp=(state, ownProps)=>{
    // 
    return({
        video: state.entities.videos[ownProps.match.params.videoId],
        videos: Object.values(state.entities.videos)
    
    });
}
const mdp=dispatch=>({
    fetchVideo: (videoId)=>dispatch(fetchVideo(videoId)),
    fetchVideos: ()=>dispatch(fetchVideos()),
    deleteVideo: (videoId)=>dispatch(deleteVideo(videoId))
})
export default connect(msp,mdp)(VideoShow)