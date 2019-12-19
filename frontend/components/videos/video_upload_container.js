import { connect } from 'react-redux';
import VideoUpload from './video_upload';
import { createVideo } from '../../actions/video_actions';
const msp = (state, ownProps) => {
    
    return({
        errors: state.errors.video
    })
    
}
const mdp = (dispatch) => {
    return {
        createVideo: video => dispatch(createVideo(video)),
    }
}
export default connect(msp, mdp)(VideoUpload);