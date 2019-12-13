import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import HomePage from './greeting/homepage';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { Link } from 'react-router-dom'
import Modal from './modal/modal.jsx'
// import Logo from './grimeo-logo-1.png'

const App = () => {
  return(
    <div>
      <Modal />
      <GreetingContainer />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/watch" component={VideoIndexContainer}/>
      <Route exact path="/watch/:videoId" component={VideoShowContainer}/>
    </div>
  );
}

export default App;
