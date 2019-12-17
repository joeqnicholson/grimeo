import React from 'react';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component{
    componentDidMount(){
      // 
      this.props.fetchVideo(this.props.match.params.videoId)
    }
    render() {

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
              <div class="video-information">
                <h1 class='vid-title'>{this.props.video.title}</h1>
                <p class='vid-description'>{this.props.video.description}</p>
              </div>
              <div class='video-comments'>
                  {
                    this.props.video.comments.map(comment=>(
                      comment.body
                    ))
                  }
              </div>
          </div>
        );
    }
}
export default VideoShow;