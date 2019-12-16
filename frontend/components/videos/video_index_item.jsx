import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem=props=>{
    debugger
    return(
        <div class='video-index-wraps'>
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
                <div>{props.video.uploader.username}</div>
                <div>{props.video.title}</div>
            </div>
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
                <div>{props.video.uploader.username}</div>
                <div>{props.video.title}</div>
            </div>
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
                <div>{props.video.uploader.username}</div>
                <div>{props.video.title}</div>
            </div>
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
                <div>{props.video.uploader.username}</div>
                <div>{props.video.title}</div>
            </div>
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
                <div>{props.video.uploader.username}</div>
                <div>{props.video.title}</div>
            </div>
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
                <div>{props.video.uploader.username}</div>
                <div>{props.video.title}</div>
            </div>
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
                <div>{props.video.uploader.username}</div>
                <div>{props.video.title}</div>
            </div>
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
                <div>{props.video.uploader.username}</div>
                <div>{props.video.title}</div>
            </div>
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
                <div>{props.video.uploader.username}</div>
                <div>{props.video.title}</div>
            </div>
            <div class='video-index-item'>
                <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
                <div>{props.video.uploader.username}</div>
                <div>{props.video.title}</div>
            </div>
           
        </div>
    )

}
export default VideoIndexItem;