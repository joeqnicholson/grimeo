// import { connect } from 'react-redux';
// import SessionForm from './session_form';
// import { signup } from '../../actions/session_actions';

// const msp = (state, ownProps) => {
//   // debugger
//   return {
//     errors: state.errors.session,
//     formType: 'signup'
//   };
// };

// const mdp = (dispatch, ownProps) => {
//   return {
//     processForm: (formUser) => dispatch(signup(formUser))
//   };
// };

// export default connect(msp, mdp)(SessionForm);
import { connect } from 'react-redux';
import React from 'react';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    signup: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
