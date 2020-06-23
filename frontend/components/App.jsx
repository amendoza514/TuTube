import React from 'react'
import GreetingContainer from './Greeting/greeting_container'
import LoginFormContainer from './Greeting/login_form_container';
import SignupFormContainer from './Greeting/signup_form_container'
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

const App  = () => (
    <div>
        <header className='main-logo'>
            <Link to='./'>► TuTube</Link>
            <GreetingContainer />
        </header>
    
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;

//QUESTION: high level summary of why we consolidate App and Root into 
// seperate files 