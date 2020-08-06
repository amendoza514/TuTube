import React from "react";
import { Link } from "react-router-dom";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.videoPreview = this.videoPreview.bind(this);
    this.videoClose = this.videoClose.bind(this);
    this.time = Math.floor(Math.random() * 24) + 1;
    this.span = ["days", "weeks", "hours", "minutes", "months", "years"];
    this.randomSpan = this.span[Math.floor(Math.random() * this.span.length)];
    this.descriptionSpan = this.descriptionSpan.bind(this);
  }

  usernameParse() {
    let s = this.props.video.user;
    let searchString = "@";
    s = s.slice(0, s.indexOf(searchString));
    s = s.split("_").join(" ");
    let words = s.split(" ");
    let newWords = [];
    words.forEach((word) =>
      newWords.push(
        word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
      )
    );
    return newWords.join(" ");
  }

  viewCounter() {
    let v = this.props.video.views;
    let s = v.toString();

    if (s.length === 4) {
      return s.slice(0, 1) + "K";
    } else if (s.length === 5) {
      return s.slice(0, 2) + "K";
    } else if (s.length === 6) {
      return s.slice(0, 3) + "K";
    } else if (s.length > 6) {
      return s.slice(0, 1) + "M";
    } else {
      return s;
    }
  }

  videoPreview() {
    this.setState({ hover: true });
  }

  videoClose() {
    this.setState({ hover: false });
  }

  titleSpan() {
    let title = this.props.video.title;
    if (title.split("").length > 65) {
      return title.split("").slice(0, 65).join("") + "...";
    } else {
      return title;
    }
  }

  descriptionSpan() {
    let description = this.props.video.description;
    if (description.split(" ").length > 40) {
      return description.split(" ").slice(0, 40).join(" ") + "...";
    } else {
      return description;
    }
  }

  render() {
    let vIcon = this.props.video.user_verified ? <i className="fas fa-check-circle"></i> : '';
    let userIcon = (
      <>
        <div className="search-view">
          <Link
            to={`/watch/${this.props.video.id}`}
            className="search-video-title"
          >
            {this.props.video.title}
          </Link>
          <div className="search-video-info">
            <div className="show-video-creator">
              {this.usernameParse()} {vIcon}
              <div className="search-video-views">
                {this.viewCounter()} views • {this.time} {this.randomSpan} ago
              </div>
            </div>
            <div className="search-description">{this.descriptionSpan()}</div>
          </div>
        </div>
      </>
    );

    if (this.state.hover) {
      visual = (
        <video
          className='search-thumbnail'
          src={this.props.video.videoUrl}
          type="video/mp4"
          autoPlay
          muted
        ></video>
      );
    }

    return (
      <div>
        <Link
          to={`/watch/${this.props.video.id}`}
          onMouseEnter={this.videoPreview}
          onMouseLeave={this.videoClose}>
          <img className="search-thumbnail" src={this.props.video.thumbUrl} />
        </Link>
        <div className="search-title-container">{userIcon}</div>
      </div>
    );
  }
}

export default SearchResults;
