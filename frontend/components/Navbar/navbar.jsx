import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import GreetingContainer from '../Greeting/greeting_container';
import SearchBar from '../Search/search_bar';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videoUploadText: false };
    }
    
    render() {
        let displayHelp;
        if (this.state.videoUploadText === false) {
            displayHelp = 'no-help'
        } else if (this.state.videoUploadText === true) {
            displayHelp = "show-help";
        }
        let headerStyle =
          this.props.mode === false ? "main-header" : "dark-main-header";

        let uploadColor = this.props.mode === false ? '#909090' : "white"

        return (
          <>
            <section className={headerStyle}>
              <button id="hamburger-icon">
                <i className="fas fa-bars"></i>
              </button>
              <Link to="./" id="main-logo">
                {/* <Link to='./' id="main-logo" onClick={this.resetSearch}> */}
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="./" id="main-text">
                {/* <Link to='./' id="main-text" onClick={this.resetSearch}> */}
                TuTube
              </Link>
              <SearchBar />
              <GreetingContainer />
              <div
                to="./"
                id="video-logo"
                onMouseEnter={() => this.setState({ videoUploadText: true })}
                onMouseLeave={() => this.setState({ videoUploadText: false })}
                onClick={() => alert("Video Upload coming soon!")}
              >
                <i className="fas fa-video" style={{ color: uploadColor }}></i>
              </div>
              <div to="./" id={displayHelp}>
                Upload Video
              </div>
            </section>
          </>
        );
    }
}

export default withRouter(Navbar);