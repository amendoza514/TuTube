import { combineReducers } from 'redux';
import modal from '../reducers/modal_reducer';
import errors from '../reducers/errors_reducer';

export default combineReducers({
    modal,
    errors
});