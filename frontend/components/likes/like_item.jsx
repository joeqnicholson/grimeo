import React from 'react';


class LikeItem extends React.Component{
    constructor(props){
        super(props)
        this.updateLike = this.updateLike.bind(this)
    }

    updateLike(e) {
        const {user} = this.props;
        if (this.props.likes.includes(user)) {
            this.props.deleteLike(this.props.video.id );
        } else if (user) {
            this.props.createLike({ user_id: user, video_id: this.props.video.id });
        }
    }

    render(){
        if(!this.props.video){
            return null
        }
        const { likes, user } = this.props;
        const heartType = likes.includes(user) ? 'fas fa-heart' : "far fa-heart";
    
        return(
            <div className='vid-stat-item'>
                <div className='vid-stat-icon'><button onClick={()=>this.updateLike()}><i class={heartType}></i></button></div>
                <div className='vid-stat-num'>{likes.length}</div>
            </div>
        )
    }
}

export default LikeItem;