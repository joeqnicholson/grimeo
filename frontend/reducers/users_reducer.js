import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import {RECEIVE_VIDEO} from '../actions/video_actions'; 

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    case RECEIVE_VIDEO:
      return Object.assign({}, state, action.video.users);
    default:
      return state;
  }
}

export default UsersReducer;