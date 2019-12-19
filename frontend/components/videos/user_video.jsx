import React from 'react'
import { Link } from 'react-router-dom'
import UserVideoIndexItem from './user_video_index_item'
import VideoUploadContainer from './video_upload_container'
class UserVideo extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchUser(this.props.id)
    }
    render(){
        if(!this.props.userPage){
            return null
          }
        const {videos, userPage, currentUser} = this.props;
        const userVideos = videos.filter(video=>video.user_id === userPage.id)
        
        const yourPage = (userPage === currentUser);
        const display = !this.props.currentUser ? (
            <div>you are not logged in</div>
        ) : ( 
            <div class='video-index-page'>
                <div class='left-column'>
                    <div class='left-column-item-wrapper'>
                        <div class='upload-wrapper'>
                        <button class='side-bar-upload'><Link class='left-column-upload-link' to={'/upload'}>Upload</Link></button>
                        </div>
                        <div class='side-bar-items'>
                            <button class='side-bar-button'>
                                <Link class='side-bar-item-link'to={'/'}> 
                                <i class="fas fa-home"> </i> Home</Link>
                            </button>
                            <button class='side-bar-button'>
                                <Link class='side-bar-item-link'to={`/user/${currentUser.id}`}>
                                <i class="far fa-play-circle"></i> Videos</Link>
                            </button>
                        </div>
                    </div>
                </div>
                {
                    userVideos.length === 0 ? 
                    <div class='no-videos-wrapper'>
                        <div class='no-videos-to-show'>You have no videos, but we can help you with that.</div>
                        <VideoUploadContainer/>
                    </div> :
                <div class='video-index-master'>
                    <div class='feed-title-and-feed-container'>
                        {
                            yourPage ? 
                            <div class='feed'>My Videos</div> :  <div class='feed'>{userPage.username}'s Videos</div>
                        }
                            <div class='vm-box'>   
                                {
                                    userVideos.map(video=>(
                                        <UserVideoIndexItem
                                        video={video}
                                        key={video.id}
                                        user={userPage}
                                        />
                                    ))
                                }
                            </div>
                    </div>
                </div>
                }
            </div>
            )
            return(
                display
            )
    }
}
export default UserVideo;