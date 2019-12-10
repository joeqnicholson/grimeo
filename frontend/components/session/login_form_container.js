import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  // debugger
  return {
    errors: state.errors.session,
    formType: 'login'
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (formUser) => dispatch(login(formUser))
  };
};

export default connect(msp, mdp)(SessionForm);