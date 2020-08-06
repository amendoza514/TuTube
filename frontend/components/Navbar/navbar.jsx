import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import GreetingContainer from '../Greeting/greeting_container';
import SearchBar from '../Search/search_bar';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <>
                <section className='main-header'>
                    <button id='hamburger-icon'>
                        <i className="fas fa-bars"></i>
                    </button>
                    <Link to='./' id="main-logo" >
                    {/* <Link to='./' id="main-logo" onClick={this.resetSearch}> */}
                        <i className="fab fa-youtube"></i>
                    </Link> 
                    <Link to='./' id="main-text">
                    {/* <Link to='./' id="main-text" onClick={this.resetSearch}> */}
                        TuTube
                    </Link>
                    <SearchBar />
                    <GreetingContainer />
                    <Link to='./' id="notifications-logo"><i className="fas fa-bell"></i></Link>
                    <Link to='./' id="video-logo"><i className="fas fa-video"></i></Link>
                </section>
            </>
        )
    }
}

export default withRouter(Navbar);