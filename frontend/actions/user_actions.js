import * as APIUtil from "../util/user_api_util";
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser=payload=>({
    type: RECEIVE_USER,
    user: payload.user,
    videos: payload.videos,
});
export const fetchUser=userId=>dispatch=>(
    APIUtil.fetchUser(userId)
    .then(payload=>dispatch(receiveUser(payload)))
)
