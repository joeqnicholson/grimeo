import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem=props=>{
    return(
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img class='thumbnail' src={props.video.thumbnailUrl}/></Link>
                <div class='video-index-title'>{props.video.title}</div>    
                <div class='video-index-username'><i class='fas fa-user-circle'> </i>{" "}{props.video.uploader.username}</div>
            </div>
    )
}
export default VideoIndexItem;