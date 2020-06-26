import React from 'react'
import LoginFormContainer  from './login_form_container';
import { Redirect} from 'react-router-dom'

const AuthComponent = (props) => {
    if (!props.loggedIn) {
        props.openModal('login')
        //returning on a React component
        //import redirect and redirect to home
    }
    return <Redirect to='/' />
}

export default AuthComponent;