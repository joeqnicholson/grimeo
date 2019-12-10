import * as APIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = ({ responseJSON }) => {
  return {
    type: RECEIVE_ERRORS,
    messages: responseJSON
  };
};

export const login = (formUser) => (dispatch) => {
  return APIUtil.login(formUser)
  .then(
    user => dispatch(receiveCurrentUser(user)), 
    errors => {
      // debugger
      dispatch(receiveErrors(errors));
    }
  );
};

export const signup = (formUser) => (dispatch) => {
  return APIUtil.signup(formUser)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then(
      user => dispatch(logoutCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    );
};

