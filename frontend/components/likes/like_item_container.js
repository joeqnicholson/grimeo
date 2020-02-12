import { connect } from 'react-redux';
import {deleteLike, createLike} from '../../actions/like_actions';
import LikeItem from './like_item';
import {withRouter} from 'react-router-dom';


// VIDEO LIKE CONTAINER

const msp = (state, ownProps) => {

    const user = state.session.id || null;
    
    const likes = state.entities.likes ? Object.values(state.entities.likes).map(like => like.user_id) : [];

    const video = state.entities.videos[ownProps.match.params.videoId];
     
    return ({
        user,
        video,
        likes,
    });
};

const mdp = dispatch => {

    return ({
        deleteLike: (id) => dispatch(deleteLike(id)),
        createLike: (like) => dispatch(createLike(like))
    });
};

export default withRouter(connect(msp, mdp)(LikeItem));