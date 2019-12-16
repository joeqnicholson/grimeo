
import {RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE} from '../actions/like_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';
const LikesReducer=(state={},action)=>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            return Object.assign({}, state, {[action.like.id]: action.like} );
        case REMOVE_LIKE:
            let news = Object.assign({}, state);
            delete news[action.likeId];
            return news;
        // case RECEIVE_VIDEO:
        //     return action.video.likes;
        default:
            return state;
    }
}
export default LikesReducer;