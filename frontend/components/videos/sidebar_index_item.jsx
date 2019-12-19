import React from 'react';
import { Link } from 'react-router-dom';

const SideBarIndexItem=props=>{
    return(
    <div class='sidebar-index-item'>
        <div class='image-container-sidebar'>
            <Link to={`/watch/${props.video.id}`}><img class='thumbnail-sidebar' src={props.video.thumbnailUrl}/></Link>
        </div>
        <div class='video-index-info-container-sidebar'>
            <div class='video-index-title-sidebar'> <Link class='video-index-title-link-sidebar'to={`/watch/${props.video.id}`}>{props.video.title}</Link></div>    
            <Link class='user-link' to={`/user/${props.video.uploader.id}`}>
            <div class='video-index-username-sidebar'>{props.video.uploader.username}</div>
            </Link>
        </div>
    </div>
    )
}
export default SideBarIndexItem

