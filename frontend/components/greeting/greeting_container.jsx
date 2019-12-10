import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const msp = ({session, entities}) => {
  const id = session.id;
  const user = entities.users[id];
  return {
    currentUser: user
  };
};

const mdp = dispatch => ({
  logoutUser: (formUser) => dispatch(logout(formUser)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(Greeting);