import React from "react";
import VideoPreview from "./video_preview";
import VideoLike from "./video_like";
import CommentIndexContainer from "../Comment/comment_index_container";

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribe: false,
      textToggle: false,
    };
    this.subscribed = this.subscribed.bind(this);
    this.textToggle = this.textToggle.bind(this);
    this.datePosted = this.datePosted.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.fetchVideo(this.props.match.params.videoId);
    }
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

  textToggle() {
    this.setState({ textToggle: !this.state.textToggle });
  }

  textReducer() {
    if (this.props.video.description.length > 300) {
      return this.props.video.description.slice(0, 300) + "...";
    } else {
      return this.props.video.description;
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

  viewDisplay() {
    let v = this.props.video.views;
    let s = v.toString();
    return s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }

  subscribed() {
    this.setState({ subscribe: !this.state.subscribe });
    if (!this.state.subscribe) {
      alert(`Subscribed to ${this.usernameParse()}`);
    } else {
      alert("Unsubscribed");
    }
  }

  render() {
    if (!this.props.video) return null;

    let toggler;
    let expandText;
    if (!this.state.textToggle && this.props.video.description.length > 300) {
      toggler = this.textReducer();
      expandText = "SHOW MORE";
    } else if (this.props.video.description.length <= 300) {
      toggler = this.props.video.description;
      expandText = "";
    } else if (this.state.textToggle) {
      toggler = this.props.video.description;
      expandText = "SHOW LESS";
    }

    let vIcon = <i className="fas fa-check-circle"></i>;
    if (!this.props.video.user_verified) {
      vIcon = "";
    }

    const previewVideos = this.props.previewIds.map(
      (id) => this.props.allVideos[id]
    );

    let subClass = "unsubscribed_button";
    let subText = "SUBSCRIBE";
    if (this.state.subscribe) {
      subClass = "subscribe_button";
      subText = "SUBSCRIBED";
    }

    let showStyle =
      this.props.mode === false ? "show-container" : "dark-show-container";
    let titleStyle = this.props.mode === false ? "large-title" : "dark-large-title";
    let viewStyle = this.props.mode === false ? "video-views" : "dark-video-views";
    let subStyle = this.props.mode === false ? "sub-count" : "dark-sub-count";
    let creatorStyle = this.props.mode === false ? "show-video-creator" : "dark-show-video-creator";
    let descStyle = this.props.mode === false ? "video-description" : "dark-video-description";
    let expandStyle = this.props.mode === false ? "expand-button" : "dark-expand-button";
    let channelStyle = this.props.mode === false ? "channel-info" : "dark-channel-info";
    let infoStyle = this.props.mode === false ? "info-container" : "dark-info-container";
    let playlistText = this.props.mode === false ? "next-text" : "dark-next-text";

    return (
      <>
        <div className={showStyle}>
          <video
            className="video-content"
            src={this.props.video.videoUrl}
            type="video/mp4"
            autoPlay
            controls
          ></video>
          <div className="video-playlist-container">
            <span className={playlistText}>Up next</span>
            <ul className="video-playlist">
              {previewVideos.map((video, idx) => (
                <VideoPreview key={idx} video={video} mode={this.props.mode} />
              ))}
            </ul>
          </div>
          <div className={infoStyle}>
            <div className={titleStyle}>{this.props.video.title}</div>
            <div className="expanded-video-info">
              <div
                className="share-button"
                onClick={() => alert(window.location.href)}
              >
                <i className="fas fa-share"></i>
                <div className="share-text">&nbsp;&nbsp;SHARE</div>
              </div>
              <VideoLike
                video={this.props.video}
                currentUser={this.props.currentUser}
                likeVideo={this.props.likeVideo}
                destroyVideoLike={this.props.destroyVideoLike}
                dislikeVideo={this.props.dislikeVideo}
              />
              <div className={viewStyle}>
                {this.viewDisplay()} views •{" "}
                {this.datePosted(this.props.video.created_at)}
              </div>
            </div>
          </div>
          <div className={channelStyle}>
            {/* <div className={subClass} onClick={this.subscribed}> */}
            <div className={subClass} onClick={() => alert('subscribes coming soon')}>
              {subText}
            </div>
            <div
              className="user-button-video-show"
              style={{ backgroundColor: this.props.video.userColor }}
            >
              {this.buttonParse()}
            </div>
            <div className={creatorStyle}>
              {this.usernameParse()} {vIcon}
            </div>
            <div className={subStyle}>0 subscribers</div>
            <div className={descStyle}>{toggler}</div>
            <div className={expandStyle} onClick={this.textToggle}>
              {expandText}
            </div>
          </div>
          <CommentIndexContainer />
        </div>
      </>
    );
  }
}

export default VideoShow;
