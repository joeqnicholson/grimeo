// import { connect } from 'react-redux';
// import SessionForm from './session_form';
// import { login } from '../../actions/session_actions';

// const msp = (state, ownProps) => {
//   // 
//   return {
//     errors: state.errors.session,
//     formType: 'login'
//   };
// };

// const mdp = (dispatch, ownProps) => {
//   return {
//     processForm: (formUser) => dispatch(login(formUser))
//   };
// };

// export default connect(msp, mdp)(SessionForm);
import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: ()=>dispatch(openModal('signup')),
    signup: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
