import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component{

    componentDidMount(){
        this.props.fetchVideos();
        debugger
    }
    render(){
        if(!this.props.videos){
            return null
          }
        const { videos } = this.props;
        return(
            <div>
                <div class='video-index-wrapper'>
                    {
                        videos.map(video=>(
                            <VideoIndexItem
                            video={video}
                            key={video.id}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}
export default VideoIndex;