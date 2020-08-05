import React from 'react'
import {Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'
import NavbarContainer from './Navbar/navbar_container'
import Modal  from '../components/Modal/modal'
import AuthComponenetContainer from './Greeting/auth_component_container'
import SignupComponentContainer from './Greeting/signup_component_container'
import HomeComponentContainer from './Home/home_container'
import VideoShowContainer from './Video/video_show_container'

const App  = () => (
    <div>
        <Modal />
        <NavbarContainer /> 
        <Switch>
            <Route path="/login" component={AuthComponenetContainer} />
            <Route path="/signup" component={SignupComponentContainer} />
            <Route path="/watch/:videoId" component={VideoShowContainer} />
            {/* <Route path="/search/:videoId" component={VideoShowContainer} /> */}
            <Route exact path="/" component={HomeComponentContainer} />
            <Redirect to="/" component={HomeComponentContainer} />
        </Switch>
    </div>
);

export default App;
