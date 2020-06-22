import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullUser = {
    id: null,
}

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {id: action.user.id});
        case LOGOUT_CURRENT_USER:
            return _nulluser;
        default:
            return state
    }
}

export default sessionReducer;