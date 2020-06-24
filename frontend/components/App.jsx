import React from 'react'
import GreetingContainer from './Greeting/greeting_container'
import LoginFormContainer from './Greeting/login_form_container';
import SignupFormContainer from './Greeting/signup_form_container'
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import Navbar from './Navbar/navbar';

const App  = () => (
    <div>
        {/* <header className='main-logo'>
            <Link to='./'>► TuTube</Link>
            <Navbar />
        </header> */}
        <Navbar /> 
        
    
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;
