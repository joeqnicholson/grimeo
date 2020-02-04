import React from 'react';
import user_video_container from '../videos/user_video_container';


class LikeItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        if(!this.props.video){
            return null
        }
        const { user, createLike, deleteLike, likes } = this.props;
        if (likes.includes(user)){
            return(
            <div className='vid-stat-item'>
                <div className='vid-stat-icon-like'><button class='like-button' onClick={()=>deleteLike(this.props.video.id)}><i class="fas fa-heart"></i></button></div>
                <div className='vid-stat-num'>{Object.keys(likes).length}</div>
            </div>
            )
        }else{
            return(
            <div className='vid-stat-item'>
                <div className='vid-stat-icon-like'><button class='like-button' onClick={()=>createLike({ user_id: user, video_id: this.props.video.id })}><i class="far fa-heart"></i></button></div>
                <div className='vid-stat-num'>{Object.keys(likes).length}</div>
            </div>
            )
        }
    }
}

export default LikeItem;