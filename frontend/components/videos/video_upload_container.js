import { connect } from 'react-redux';
import VideoUpload from './video_upload';
import { fetchVideo } from '../../actions/video_actions';

const msp = (state, ownProps) => {

}

const mdp = (dispatch, ownProps) => {
    return {
        upload: video => dispatch(fetchVideo(video)),
    }
}

export default connect(null, mdp)(VideoUpload);