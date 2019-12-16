import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';
// import { fetchUser } from '../../actions/user_actions';


const msp=state=>({
    videos: Object.values(state.entities.videos),
    users: Object.values(state.entities.videos)
})
const mdp=dispatch=>({
    fetchVideos:()=>dispatch(fetchVideos()),
    // fetchUser:(userId)=>dispatch(fetchUser(userId))
})
export default connect(msp,mdp)(VideoIndex)