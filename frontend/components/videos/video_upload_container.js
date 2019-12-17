import { connect } from 'react-redux';
import VideoUpload from './video_upload';
import { createVideo } from '../../actions/video_actions';

const msp = (state, ownProps) => {

}

const mdp = (dispatch) => {
    return {
        createVideo: video => dispatch(createVideo(video)),
    }
}

export default connect(null, mdp)(VideoUpload);