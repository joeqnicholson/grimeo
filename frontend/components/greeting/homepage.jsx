import React from 'react'
import VideoIndexItem from '../videos/video_index_item'
import { Link } from 'react-router-dom'

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.demoUser = this.demoUser.bind(this)
        
    }
    componentDidMount(){
        this.props.fetchVideos()
    }
    demoUser(){
        function randomStr(len, arr) { 
          var ans = ''; 
          for (var i = len; i > 0; i--) { 
            ans +=  
            arr[Math.floor(Math.random() * arr.length)]; 
          } 
          return ans; 
        } 
        const str = "1234567890qwertyuiopasdfghjklzxcvbnm"
        this.props.signup({username: 'Ada Lovelace ' + randomStr(5, str), password:'password'})
      }
    render(){
        if(!this.props.videos){
            return null
          }

        const {videos, users, currentUser} = this.props;
        const display = !this.props.currentUser ? (
            <div class='main-text'>
                <h1 class='help'>Grimeo can help*.</h1>
                <div class='lil-text'>*with spooky collaboration, viewing ghouls, goblins and everything else.</div>
                {!this.props.currentUser ?
                    <div class='button-container'>
                        <div class='homepage-buttons'>
                            <button class='homepage-button-demo' onClick={this.demoUser}>Demo Login</button>
                            <button class='homepage-button-signup' onClick={this.props.otherForm}>Sign Up</button>
                        </div>
                    </div>
                    :
                    <div></div>
                }    
            </div>
        ) : ( 
            <div class='video-index-page'>
                <div class='left-column'>
                    <div class='left-column-item-wrapper'>
                        <div class='upload-wrapper'>
                        <Link class='' to={'/upload'}><button class='side-bar-upload left-column-upload-link'>Upload</button></Link>
                        </div>
                        <div class='side-bar-items'>
                            <button class='side-bar-button'>
                                <Link class='side-bar-item-link'to={'/'}> 
                                <i class="fas fa-home"></i> Home</Link>
                            </button>
                            <button class='side-bar-button'>
                                <Link class='side-bar-item-link'to={`/user/${this.props.currentUser.id}`}>
                                <i class="far fa-play-circle"></i> Videos</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div class='video-index-master'>
                    <div class='feed-title-and-feed-container'>
                        <div class='feed'>My Feed</div>
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
            )
            return(
                display
            )
    }
}
export default HomePage;