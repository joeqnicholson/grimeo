import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
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
    .then(() => this.props.closeModal());
    this.props.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.closeModal());
  }

  updateState(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const { formType, errors } = this.props;
    const formHeader = formType === 'signup' ? (
      <header>
        <h2 class='login-join-titles'>Join Grimeo</h2>
      </header>
    ) : ( 
      <header>
        <h2 class='login-join-titles'>Log in to Grimeo</h2>
      </header>
    );
    const errorLis = errors.map((err, i) => {
      return (
        <div class='error'>{err}</div>
      )
    });
    return (
      <div>
      <div class="modal-header">
          <button onClick={this.props.closeModal} class="close-x">&#10005;</button>
          {formHeader}
        </div>
          <div className="session-form">

        <form onSubmit={this.handleSubmit}>
          <label>
            <input class='session-input'
              type="text" 
              placeholder='First and last name'
              onChange={this.updateState('username')} 
              value={this.state.username}
              />
          </label>
          {formType === 'signup' ?
          <label>
          <input class='session-input'
            type="email" 
            placeholder='Email' 
          />
        </label>
          :
          <div></div>
          }
          
          <label>
            <input class='session-input'
              type="password" 
              placeholder='Password'
              onChange={this.updateState('password')} 
              value={this.state.password}
            />
          </label>
          <div class='errors'>
          {errors.length > 1 ? <div class='error'>Please enter your name, email and password</div> : errorLis}
        </div>
          <button class='log-sign-button' type='submit'>{formType === 'signup' ? 'Sign Up' : 'Log In'}</button>
          <span class='or'>or</span>
        </form>
        {
          // formType === 'signup' ? <button class='log-sign-button' onClick={this.demoUser}>Sign Up as Robot</button> : 
          <button class='log-sign-button-demo' onClick={this.demoUser}>Demo Login</button>
        }
        {formType === 'signup' ? 
        <div class='other-form-prompt'>
            <div class='dont-already'>
            Already have an account?
            <button class='other-form-link' onClick={this.props.otherForm}>Log in</button>
            </div >
            <div class='text-below'>By joining Vimeo, you agree to our Terms of Service, Privacy Policy</div>
            <div class='text-below'>and Cookie Policy.</div>
          </div> : 
          <div class='other-form-prompt'>
            <div class='dont-already'>
              Don't have an account?
              <button class='other-form-link' onClick={this.props.otherForm}>Join</button>
            </div>
            
          </div>
         

        
        }
        
      </div>
      </div>
    )
  }
}
//
export default SessionForm;