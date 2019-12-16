import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import HomePage from './homepage';
import { openModal } from '../../actions/modal_actions';

const msp = ({session, entities}) => {
  const id = session.id;
  const user = entities.users[id];
  return {
    currentUser: user
  };
};

const mdp = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  otherForm: () => dispatch(openModal('signup'))
});

export default connect(msp, mdp)(HomePage);