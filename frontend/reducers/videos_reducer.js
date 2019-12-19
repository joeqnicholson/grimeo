import { RECEIVE_VIDEO, RECEIVE_ALL_VIDEOS, REMOVE_VIDEO } from "../actions/video_actions"
import { RECEIVE_USER } from "../actions/user_actions"

const VideosReducer=(state={}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_VIDEOS:
            return Object.assign({}, state, action.videos)
          case RECEIVE_VIDEO:
            return Object.assign({}, state, { [action.video.id]: action.video })
          case RECEIVE_USER:
            return Object.assign({}, state, action.videos)
          case REMOVE_VIDEO:
            let news = Object.assign({}, state);
            delete news[action.videoId]
            return news;
          default:
            return state;
    }
}
export default VideosReducer;