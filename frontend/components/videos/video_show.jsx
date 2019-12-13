import React from 'react';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component{
    componentDidMount(){
      debugger
      this.props.fetchVideo(this.props.match.params.videoId)
    }
    render() {
        // const { video } = this.props;
        debugger
        if(!this.props.video){
          return null
        }
        return (
          <div>
            <h1>{this.props.video.title}</h1>
            <p>{this.props.video.description}</p>
            <video src={this.props.video.videoUrl}></video>
          </div>
        );
    }
}
export default VideoShow;