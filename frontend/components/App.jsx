import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Footer from './greeting/footer';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import UserVideoContainer from './videos/user_video_container';
import VideoUploadContainer from './videos/video_upload_container';
import HomePage from './greeting/homepage';
import HomePageContainer from './greeting/homepage_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { Link } from 'react-router-dom'
import Modal from './modal/modal.jsx'

// import Logo from './grimeo-logo-1.png'

const App = () => {
  return(
    <div>
      <Modal />
      <header>
      <GreetingContainer />
      </header>
      <Switch>
        <Route exact path="/" component={HomePageContainer}/>
        <Route exact path="/watch" component={VideoIndexContainer}/>
        <Route exact path="/watch/:videoId" component={VideoShowContainer}/>
        <Route exact path="/upload" component={VideoUploadContainer}/>
        <Route exact path="/user/:userId" component={UserVideoContainer}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
