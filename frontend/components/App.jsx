import React from 'react';
import GreetingContainer from './greeting/greeting_container';
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
      
      {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
  );
}

export default App;
