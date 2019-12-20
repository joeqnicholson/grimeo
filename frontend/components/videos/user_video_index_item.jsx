import React from 'react';
import { Link } from 'react-router-dom';

const UserVideoIndexItem=props=>{
    return(
            <div class='video-index-item'>
                <div class='grimeo-staff-pick'><span class='added'> </span> </div>
                <div class='image-container'>
                    <Link to={`/watch/${props.video.id}`}><img class='thumbnail' src={props.video.thumbnailUrl}/></Link>
                </div>
                <div class='video-index-info'>
                    <div class='video-index-title'> <Link class='video-index-title-link'to={`/watch/${props.video.id}`}> {props.video.title}</Link></div>
                    <div class='views-date-index'>{props.video.plays} views - 6 days ago</div>    
                </div>
                    <div class='video-index-username'>
                        <Link class='user-link' to={`/user/${props.user.id}`}>
                            <i class='fas fa-user-circle'> </i> <div class='user-index-username'>{props.user.username}</div>
                        </Link>
                    </div>
            </div>
    )
}
export default UserVideoIndexItem;