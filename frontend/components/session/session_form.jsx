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
        <h2>Join Grimeo</h2>
      </header>
    ) : ( 
      <header>
        <h2>Log in to Grimeo</h2>
      </header>
    );
    const errorLis = errors.map((err, i) => {
      return (
        <li key={i}>{err}</li>
      )
    });
    return (
      <div className="session-form">
        {formHeader}
        <ul>
          {errorLis}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label> Username:
            <input 
              type="text" 
              onChange={this.updateState('username')} 
              value={this.state.username}
            />
          </label>
          <label> Password:
            <input 
              type="password" 
              onChange={this.updateState('password')} 
              value={this.state.password}
            />
          </label>
          <button>{formType === 'signup' ? 'Sign Up' : 'Log In'}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;