import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';


const msp = ({session, entities}) => {
  const id = session.id;
  const user = entities.users[id];
  return {
    currentUser: user
  };
};

const mdp = dispatch => ({
  logoutUser: (formUser) => dispatch(logout(formUser))
});

export default connect(msp, mdp)(Greeting);