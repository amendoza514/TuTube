import React from 'react'
import { Link } from 'react-router-dom'
import GreetingContainer from '../Greeting/greeting_container'

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <>
                <section className='main-header'>
                    <Link to='./' id="main-logo">
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link to='./' id="main-text">
                        TuTube
                    </Link>
                    <div  id="search-bar">
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