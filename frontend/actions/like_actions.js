import * as LikesAPIUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";


// Normal actions
const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const receiveAllLikes = () => ({
    type: RECEIVE_ALL_LIKES,
    likes
});

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});


// Thunk actions
export const createLike = like => dispatch => {
    return LikesAPIUtil.addLike(like)
        .then(like => dispatch(receiveLike(like)))
};

export const getLikes = (video_id) => {
    return LikesAPIUtil.receiveAllLikes(video_id)
        .then( likes => dispatch(receiveAllLikes(video_id)))
};

export const deleteLike = id => dispatch => (
    LikesAPIUtil.removeLike(id)
        .then(like => dispatch(removeLike(like.id)))
);