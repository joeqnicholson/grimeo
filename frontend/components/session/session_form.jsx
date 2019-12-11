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
    // function randomStr(len, arr) { 
    //   var ans = ''; 
    //   for (var i = len; i > 0; i--) { 
    //     ans +=  
    //     arr[Math.floor(Math.random() * arr.length)]; 
    //   } 
    //   return ans; 
    // } 
    // const str = "1234567890qwertyuiopasdfghjklzxcvbnm"
    // this.props.formType === 'signup' ? 
    // this.setState({username: randomStr(16, str), password:'password'}) :
    this.props.login({username: "Ada Lovelace", password:'password'})
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
          <button onClick={this.props.closeModal} class="close-x">X</button>
          {formHeader}
        </div>
          <div className="session-form">

        <form onSubmit={this.handleSubmit}>
          <label>
            <input 
              type="text" 
              placeholder='Username'
              onChange={this.updateState('username')} 
              value={this.state.username}
            />
          </label>
          <label>
            <input 
              type="password" 
              placeholder='Password'
              onChange={this.updateState('password')} 
              value={this.state.password}
            />
          </label>
          <div class='errors'>
          {errors.length > 1 ? <div class='error'>Please enter your username, and password</div> : errorLis}
        </div>
          <button class='log-sign-button' type='submit'>{formType === 'signup' ? 'Sign Up' : 'Log In'}</button>
        </form>
        {
          // formType === 'signup' ? <button class='log-sign-button' onClick={this.demoUser}>Sign Up as Robot</button> : 
          <button class='log-sign-button' onClick={this.demoUser}>Login as Ada Lovelace</button>
        }
        
      </div>
      </div>
    )
  }
}

export default SessionForm;