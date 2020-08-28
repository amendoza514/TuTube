import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import GreetingContainer from '../Greeting/greeting_container';
import SearchBar from '../Search/search_bar';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoUploadText: false };
    this.toggleMode = this.toggleMode.bind(this);
  }
  
  toggleMode() {
    if (this.props.mode === false) {
      this.props.darkMode();
    } else {
      this.props.normalMode();
    }
  }
  render() {
    let displayHelp;
    if (this.state.videoUploadText === false) {
      displayHelp = "no-help";
    } else if (this.state.videoUploadText === true) {
      displayHelp = "show-help";
    }
    let headerStyle =
      this.props.mode === false ? "main-header" : "dark-main-header";

    let uploadColor = this.props.mode === false ? "#909090" : "white";
    let hamburgerColor = this.props.mode === false ? "#909090" : "white";
    let hamburgerBackColor =
      this.props.mode === false ? "hamburger-icon" : "dark-hamburger-icon";
    let titleColor = this.props.mode === false ? "black" : "white";
    let darkMode =
      this.props.mode === false
        ? "home-dark-mode-icon"
        : "active-home-dark-mode-icon";

    return (
      <>
        <section className={headerStyle}>
          <button id={hamburgerBackColor}>
            <i
              className="fas fa-bars"
              style={{
                color: hamburgerColor,
              }}
              onClick={() => alert("home menu popup coming soon")}
            ></i>
          </button>
          <Link to="./" id="main-logo">
            {/* <Link to='./' id="main-logo" onClick={this.resetSearch}> */}
            <i className="fab fa-youtube"></i>
            <div id="temp"></div>
          </Link>
          <Link to="./" id="main-text" style={{ color: titleColor }}>
            {/* <Link to='./' id="main-text" onClick={this.resetSearch}> */}
            TuTube
          </Link>
          <SearchBar mode={this.props.mode} />
          <GreetingContainer />
          <i
            id={darkMode}
            className="fas fa-adjust"
            onClick={this.toggleMode}
          ></i>
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