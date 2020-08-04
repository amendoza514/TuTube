import { combineReducers } from 'redux';
import modal from '../reducers/modal_reducer';
import errors from '../reducers/errors_reducer';
import search from '../reducers/search_reducer'

export default combineReducers({
    modal,
    errors,
    search
});