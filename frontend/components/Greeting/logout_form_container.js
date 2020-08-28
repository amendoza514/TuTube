import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { darkMode, normalMode } from '../../actions/mode_actions';

const mapStateToProps = state => ({
    formType: 'logout',
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    mode: state.ui.mode,
});

const mapDispatchToProps = dispatch => {
    // processForm: user => dispatch(login(user))
    return {
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal()),
        darkMode: () => dispatch(darkMode()),
        normalMode: () => dispatch(normalMode()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)