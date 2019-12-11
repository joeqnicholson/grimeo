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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
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
        <li key={i}>{err}</li>
      )
    });
    return (
      <div>
      <div class="modal-header">
          <button onClick={this.props.closeModal} class="close-x">X</button>
          {formHeader}
        </div>
          <div className="session-form">
        <ul>
          {errorLis}
        </ul>
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
          <button class='log-sign-button'>{formType === 'signup' ? 'Sign Up' : 'Log In'}</button>
        </form>
      </div>
      </div>
    )
  }
}

export default SessionForm;