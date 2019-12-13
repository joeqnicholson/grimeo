import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';


export default combineReducers({
  users: usersReducer,
  videos: videosReducer
});