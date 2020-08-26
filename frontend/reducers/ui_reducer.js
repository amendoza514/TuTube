import { combineReducers } from 'redux';
import modal from '../reducers/modal_reducer';
import mode from '../reducers/mode_reducer'
import errors from '../reducers/errors_reducer';

export default combineReducers({
    modal,
    mode, 
    errors
});