import sessionErrorsReducer from "./session_errors_reducer";
import { combineReducers } from 'redux';

const ErrorsReducer = combineReducers({
  session: sessionErrorsReducer
});
export default ErrorsReducer;