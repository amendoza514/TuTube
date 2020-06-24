import React from 'react'
import GreetingContainer from './Greeting/greeting_container'
import LoginFormContainer from './Greeting/login_form_container';
import SignupFormContainer from './Greeting/signup_form_container'
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import Navbar from './Navbar/navbar';
import Modal  from '../components/Modal/modal'

const App  = () => (
    <div>
        <Modal />
        {/* <header className='main-logo'>
            <Link to='./'>► TuTube</Link>
            <Navbar />
        </header> */}
        <Navbar /> 
        
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;
