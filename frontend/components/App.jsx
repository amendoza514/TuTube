import React from 'react'
import GreetingContainer from './Greeting/greeting_container'
import LoginFormContainer from './Greeting/login_form_container';
import SignupFormContainer from './Greeting/signup_form_container'
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import Navbar from './Navbar/navbar';
import Modal  from '../components/Modal/modal'
import {openModal} from './Modal/modal'

const App  = () => (
    <div>
        <Modal />
        <Navbar /> 
        
        <Switch>
            {/* <AuthRoute path="/login" render={() => (
                state.session.id ?
                    <Redirect to="/" /> :
                    <Redirect to="/ASDASDASDASD" />
            )} /> */}
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Redirect to="/" />
        </Switch>
       
    </div>
);

export default App;
