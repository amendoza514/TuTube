import { connect } from 'react-redux';
import React from 'react'
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
    formType: 'login',
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => {
    // processForm: user => dispatch(login(user))
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <div onClick={() => dispatch(openModal('signup'))}>
                Create account
            </div>
        ),
        closeModal: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)