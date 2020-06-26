import React from 'react'
import LoginFormContainer from './login_form_container';

const SignupAuthComponent = (props) => {
    if (props.loggedIn) {
        return null;
    } else {
        props.openModal('signup')
        return null;
    }
}

export default SignupAuthComponent;