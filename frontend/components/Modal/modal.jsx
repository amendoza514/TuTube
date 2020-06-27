import React from 'react'
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../Greeting/login_form_container';
import SignupFormContainer from '../Greeting/signup_form_container';
import LogoutFormContainer from '../Greeting/logout_form_container'


function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'logout':
            component = <LogoutFormContainer />;
            break;
      
        default:
            return null;
    }
    
    let modalReturn = <div className="greeting-modal-background" onClick={closeModal}>
        <div className="greeting-modal-child" onClick={e => e.stopPropagation()}>
            {component}
        </div>
    </div>;

    if (modal === 'logout') {
        modalReturn = <div className="user-modal-background" onClick={closeModal}>
            <div className="user-modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>;
    }

    return (
        <div>{modalReturn}</div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

//Question what is going on here