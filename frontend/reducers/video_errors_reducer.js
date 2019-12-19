import { RECEIVE_VIDEO_ERRORS } from "../actions/video_actions";

const videoErrorsReducer = (state=[],action)=>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO_ERRORS:
      return action.messages;
    default:
      return state;
  }
};

export default videoErrorsReducer;