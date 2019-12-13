import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // debugger
        this.props.fetchVideos();
    }
 

    render(){
        // debugger
        const { videos, fetchUser } = this.props;
        return(
            <div>
                <ul>
                    {
                        videos.map(video=>(
                            <VideoIndexItem
                            video={video}
                            key={video.id}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
export default VideoIndex;