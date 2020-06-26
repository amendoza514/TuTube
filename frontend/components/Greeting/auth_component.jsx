import React from 'react'
import LoginFormContainer  from './login_form_container';

const AuthComponent = (props) => {
    if (props.loggedIn) {
        return null;
    } else {
        props.openModal('login')
        return null;
        //returning on a React component
        //import redirect and redirect to home
    }
}

export default AuthComponent;