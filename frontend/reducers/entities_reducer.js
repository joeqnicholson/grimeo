import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import VideosReducer from './videos_reducer';



export default combineReducers({
  users: UsersReducer,
  videos: VideosReducer,
});