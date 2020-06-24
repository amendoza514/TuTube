import { connect } from 'react-redux';
import React from 'react'
import SessionForm from './session_form';
import { signUp } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = state => ({
    formType: 'signup',
    // errors: state.entities.errors.
});

const mapDispatchToProps = dispatch => {
    // processForm: user => dispatch(signUp(user))
    return {
        processForm: (user) => dispatch(signUp(user)),
        otherForm: (
            <div onClick={() => dispatch(openModal('login'))}>
                Sign in
            </div>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)

//QUESTION why did I need react here? just for the {} snippets?