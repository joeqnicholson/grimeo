import React from 'react';
import { Link } from 'react-router-dom';
import SideBarIndexItem from './sidebar_index_item'

class VideoShow extends React.Component{
    componentDidMount(){
      // 
      this.props.fetchVideo(this.props.match.params.videoId)
      this.props.fetchVideos();
    }
    render() {
      const { videos } = this.props;

        if(!this.props.video){
          return null
        }
        return (
          <div>
            <div class='video-wrapper'>
              <video 
                  class='player'
                  controls
                  autoPlay
                  src={this.props.video.videoUrl}
                  type='video/mp4' />
            </div>
            <div class='video-bottom-master'>
              <div class='video-bottom'>
                <div class="video-information">
                  <div class='top-info'>
                    <div class='vid-title'>{this.props.video.title}</div>
                    <div class='vid-show-date'>3 days ago</div>
                    <div class='video-show-username'>
                        <Link class='user-link' to={`/user/${this.props.video.uploader.id}`}>
                          <div><i class="far fa-user-circle this-is-an-icon"></i></div>
                          <div class='user-show-link'></div>{"  "}{this.props.video.uploader.username}
                        </Link>
                    </div>
                    
                  </div>
                  <p class='vid-description'>{this.props.video.description}</p>
                </div>
                <div class='up-next-bar'>
                  {
                      videos.map(video=>(
                          <SideBarIndexItem
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
export default VideoShow;