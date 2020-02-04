import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import CommentsReducer from './comments_reducer';
import VideosReducer from './videos_reducer';
import likesReducer from './likes_reducer';



export default combineReducers({
  users: UsersReducer,
  videos: VideosReducer,
  comments: CommentsReducer,
  likes: likesReducer
});