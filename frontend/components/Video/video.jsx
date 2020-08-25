import React from 'react'
import { Link } from 'react-router-dom'

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.videoPreview = this.videoPreview.bind(this);
    this.videoClose = this.videoClose.bind(this);
    this.datePosted = this.datePosted.bind(this);
    this.descriptionSpan = this.descriptionSpan.bind(this);
  }

  datePosted(video_date) {
    if (video_date) {
      let monthCalc = parseInt(
        Date.now() - new Date(video_date).getTime().toString()
      );
      let monthsSince = monthCalc / 1000 / 3600 / 24 / 30;
      if (monthsSince < 1) {
        let days = Math.floor(monthsSince * 30);
        if (days < 7) {
          if (days === 0 || !days) return "today";
          if (days === 1) return "yesterday";
          if (days > 1) return `${days} days ago`;
        } else {
          return Math.floor(days / 7) + " weeks ago";
        }
      } else if (Math.floor(monthsSince) < 12) {
        if (Math.floor(monthsSince) < 1) {
          return Math.floor(monthsSince) + " months ago";
        } else {
          return "1 month ago";
        }
      } else {
        return Math.floor(monthsSince) / 12 + " years ago";
      }
    }
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

  buttonParse() {
    let s = this.props.video.user;
    return s.slice(0, 1);
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
    let vIcon = <i className="fas fa-check-circle"></i>;
    if (!this.props.video.user_verified) {
      vIcon = "";
    }
    let userIcon = (
      <>
        <div
          className="user-button-video-index"
          style={{ backgroundColor: this.props.color }}
        >
          {this.buttonParse()}
        </div>
        <Link to={`/watch/${this.props.video.id}`} className="video-title">
          {this.titleSpan()}
        </Link>
        <div className="video-info">
          <div className="video-creator">
            {this.usernameParse()} {vIcon}
          </div>
          <div className="video-views">
            {this.viewCounter()} views • {this.datePosted(this.props.video.created_at)}
          </div>
        </div>
      </>
    );

    let visual = <img className="thumbnail" src={this.props.video.thumbUrl} />;
    if (this.state.hover) {
      visual = (
        <video
          className="thumbnail"
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
          onMouseLeave={this.videoClose}
        >
          {visual}
        </Link>
        <div className="title-container">{userIcon}</div>
      </div>
    );
  }
}

export default Video;