import React from 'react'
import { Link } from 'react-router-dom'
import GreetingContainer from '../Greeting/greeting_container'
import Sidebar from '../Home/sidebar'

class Navbar extends React.Component {

    render() {
        return(
            <>
                <Sidebar />
                <section className='main-header'>
                    <button id='hamburger-icon'>
                        <i className="fas fa-bars"></i>
                    </button>
                    <Link to='./' id="main-logo">
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link to='./' id="main-text">
                        TuTube
                    </Link>
                    <div className='search'>
                        <input type="text" id="search-bar" placeholder="Search"/>
                        <button id="search-button">🔍</button>
                    </div>
                    <GreetingContainer />
                    <Link to='./' id="notifications-logo"><i className="fas fa-bell"></i></Link>
                    <Link to='./' id="video-logo"><i className="fas fa-video"></i></Link>
                </section>
            </>
        )
    }
}

export default Navbar;

{/* <input value="text" id="search-bar" placeholder="search"><button id="search-button">🔍</button></input>  */}