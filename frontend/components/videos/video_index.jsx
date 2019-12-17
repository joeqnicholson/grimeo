import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component{

    componentDidMount(){
        this.props.fetchVideos();
        
    }
    render(){
        if(!this.props.videos){
            return null
          }
        const { videos } = this.props;
        return(
            <div class='master-index'>
                <div class='vindex-box'>
                    <div class='playlist-title'>Spooky videos, hand chosen to scare you silly</div>
                        <div class='bottom-box'>
                            <div class='logo-box'>
                            <img class='staff-pick' src="/staff_pick.png" alt=""/>
                            </div>
                            <div class='vm-box'>
                                {
                                    videos.map(video=>(
                                        <VideoIndexItem
                                        video={video}
                                        key={video.id}/>
                                    ))
                                }
                            </div>
                        </div>
                </div>
                <div class='vindex-box'>
                    <div class='playlist-title'>Spooky videos, hand chosen to scare you silly</div>
                        <div class='bottom-box'>
                            <div class='logo-box'>
                            <img class='staff-pick' src="/staff_pick.png" alt=""/>
                            </div>
                            <div class='vm-box'>
                                {
                                    videos.map(video=>(
                                        <VideoIndexItem
                                        video={video}
                                        key={video.id}/>
                                    ))
                                }
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}
export default VideoIndex;