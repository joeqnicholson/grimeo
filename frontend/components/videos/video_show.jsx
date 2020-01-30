import React from 'react';
import { Link } from 'react-router-dom';
import SideBarIndexItem from './sidebar_index_item'
import CommentIndexItem from '../comments/comment_index_item'
import CommentForm from '../comments/comment_form'

class VideoShow extends React.Component{
    constructor(props){
      super(props)
    }
    componentDidMount(){
      this.props.fetchVideos().then(() => this.props.fetchVideo(this.props.match.params.videoId))
    }
    

    render() {
        if(!this.props.video){
          return null
        }
        const { videos } = this.props;
        const { comments } = this.props;

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
      
                  <div class='comments-wrapper'>
                    {
                      comments ? 
                      comments.map(comment=>{
                        let user = this.props.video.comment_user.filter(user=> user.id === comment.user_id)[0]
                        return(
                          user ? 
                          <CommentIndexItem
                          comment={comment}
                          deleteComment = {this.props.deleteComment}
                          currentUser = {this.props.currentUser}
                          video = {this.props.video}
                          user = {user}
                          key={comment.id}
                          updateComment = {this.props.updateComment}/> :
                          <div></div>
                        )
                          
                      })
                      :
                      <div class='no-comments'> No Comments to show</div>
                    }
                    {/* <CommentForm
                    videoId ={this.props.video.id}
                    userId = {this.props.currentUser.id}
                    createComment = {this.props.createComment}/> */}
                  </div>
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