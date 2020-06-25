import { connect } from 'react-redux';
import React from 'react'
import SessionForm from './session_form';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
    formType: 'logout',
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session 
});

const mapDispatchToProps = dispatch => {
    // processForm: user => dispatch(login(user))
    return {
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)