import React from 'react'
import SignupFormContainer from './Greeting/signup_form_container'
import {Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import Navbar from './Navbar/navbar';
import Modal  from '../components/Modal/modal'
import AuthComponenetContainer from './Greeting/auth_component_container'
import SignupComponentContainer from './Greeting/signup_component_container'
import HomeComponentContainer from './Home/home_container'

const App  = () => (
    <div>
        <Modal />
        <Navbar /> 
        
        <Switch>
            <Route path="/login" component={AuthComponenetContainer} />
            <Route path="/signup" component={SignupComponentContainer} />
            <Route exact path="/" component={HomeComponentContainer} />
            <Redirect to="/" component={HomeComponentContainer} />
        </Switch>
    </div>
);

export default App;
