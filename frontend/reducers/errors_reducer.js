import sessionErrorsReducer from "./session_errors_reducer";
import videoErrorsReducer from "./video_errors_reducer";
import { combineReducers } from 'redux';

const ErrorsReducer = combineReducers({
  session: sessionErrorsReducer,
  video: videoErrorsReducer
});
export default ErrorsReducer;