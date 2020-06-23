import * as APIUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

export const signUp = formUser => dispatch => APIUtils.signUp(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => APIUtils.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))

export const logout = () => dispatch => APIUtils.logout()
    .then(() => dispatch(logoutCurrentUser()));