import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import HomePage from './homepage';
import { openModal } from '../../actions/modal_actions';
import { fetchVideos } from '../../actions/video_actions';


const msp = ({session, entities}) => {
  const id = session.id;
  const user = entities.users[id];
  return {
    currentUser: user,
    videos: Object.values(entities.videos),
    users: Object.values(entities.videos)
  };
};

const mdp = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  otherForm: () => dispatch(openModal('signup')),
  fetchVideos:() => dispatch(fetchVideos()),
});

export default connect(msp, mdp)(HomePage);