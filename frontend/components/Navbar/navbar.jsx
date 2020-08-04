import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import GreetingContainer from '../Greeting/greeting_container'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '' }
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleEnter  = this.handleEnter.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }

    handleEnter(e) {
        if (e.charCode === 13) {
            this.handleSearch();
        }
    }

    handleInput(type) {
        return e => {
            this.setState({[type]: e.target.value})
            // console.log(e.target.value)
        }
    }

    handleSearch() {
        // console.log(this.state.search);
        this.props.search(this.state.search)
        // this.setState({search: ''});
    }

    resetSearch() {
        this.setState({ search: '' });
        // this.props.search(this.state.search);
        this.props.search("");
        // QUESTION Why does this second work on first click, first takes two?
    }

    render() {
        return(
            <>
                <section className='main-header'>
                    <button id='hamburger-icon'>
                        <i className="fas fa-bars"></i>
                    </button>
                    <Link to='./' id="main-logo" onClick={this.resetSearch}>
                        <i className="fab fa-youtube"></i>
                    </Link> 
                    <Link to='./' id="main-text" onClick={this.resetSearch}>
                        TuTube
                    </Link>
                    <div className='search'>
                        <input 
                            type="text" 
                            id="search-bar" 
                            placeholder="Search"
                            onKeyPress={this.handleEnter}
                            onChange={this.handleInput('search')}
                            value={this.state.search}
                            />
                        <button id="search-button" onClick={this.handleSearch}>🔍</button>
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