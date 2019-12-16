import {RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_VIDEO} from '../actions/video_actions';

import {RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_VIDEO} from '../actions/video_actions';
const CommentsReducer=(state={},action)=>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[action.comment.id]: action.comment} );
        case REMOVE_COMMENT:
            let news = Object.assign({}, state);
            delete news[action.commentId];
            return news;
        case RECEIVE_VIDEO:
            return action.video.comments;
            
        default:
            return state;
    }
}
export default CommentsReducer;