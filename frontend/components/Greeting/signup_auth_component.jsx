import React from 'react'
import LoginFormContainer from './login_form_container';
import { Redirect } from 'react-router-dom'

const SignupAuthComponent = (props) => {
    if(!props.loggedIn) {
        props.openModal('signup')
    }
    return <Redirect to='/' />
}

export default SignupAuthComponent;