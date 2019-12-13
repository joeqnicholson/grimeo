import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem=props=>{
    debugger
    return(
        <div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
            <Link to={`watch/${props.video.id}`}><img src={props.video.thumbnailUrl}/></Link>
            <div>{props.video.uploader.username}</div>
            <div>{props.video.title}</div>
        </div>
    )

}
export default VideoIndexItem;