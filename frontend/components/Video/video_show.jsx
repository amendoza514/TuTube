import React from "react";
import VideoPreview from "./video_preview";
import CommentIndexContainer from "../Comment/comment_index_container";

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribe: false,
      textToggle: false,
      liked: false,
      disliked: false,
    };
    // this.likes;
    // this.likesCount;
    // this.dislikesCount;
    this.subscribed = this.subscribed.bind(this);
    this.textToggle = this.textToggle.bind(this);
    this.time = Math.floor(Math.random() * 24) + 1;
    this.span = ["days", "weeks", "hours", "minutes", "months", "years"];
    this.randomSpan = this.span[Math.floor(Math.random() * this.span.length)];
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId).then(() => {
        // this.likes = this.props.video.likes;
        // this.likesCount = this.likes.filter(like => like.like === true).length;
        // this.dislikesCount = this.likes.filter(like => like.like === false).length;

        if (this.props.currentUser) {
        //   this.likes.forEach((like) => {
          this.props.video.likes.forEach((like) => {
            if (like.user_id === this.props.currentUser.id && like.like === true) {
              this.setState({ liked: true, disliked: false });
            } else if (like.user_id === this.props.currentUser.id && like.like === false) {
              this.setState({ liked: false, disliked: true });
            }
         });
        }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.fetchVideo(this.props.match.params.videoId).then(() => {
        // this.likes = this.props.video.likes;
        // this.likesCount = this.likes.filter(like => like.like === true).length;
        // this.dislikesCount = this.likes.filter(like => like.like === false).length;

        if (this.props.currentUser) {
          //   this.likes.forEach((like) => {
          this.props.video.likes.forEach((like) => {
            if (
              like.user_id === this.props.currentUser.id &&
              like.like === true
            ) {
              this.setState({ liked: true, disliked: false });
            } else if (
              like.user_id === this.props.currentUser.id &&
              like.like === false
            ) {
              this.setState({ liked: false, disliked: true });
            }
          });
        }
      });
    }
  }

  handleLike(e) {
    e.preventDefault();
    if (this.props.currentUser) {
        if (this.state.liked === false && this.state.disliked === false) {
            this.props.likeVideo(this.props.video);
            this.setState({ liked: true, disliked: false})
            
        } else if (this.state.liked === true && this.state.disliked === false) {
            this.props.destroyVideoLike(
                this.props.video.id, 
                this.props.video.likes.filter(like => like.user_id === this.props.currentUser.id)[0].id);
            this.setState({ liked: false, disliked: false });
        } else if (this.state.liked === false && this.state.disliked === true) {
            this.props.destroyVideoLike(
                this.props.video.id, 
                this.props.video.likes.filter(like => like.user_id === this.props.currentUser.id)[0].id)
                .then(() => {
                    this.props.likeVideo(this.props.video);
                    this.setState({ liked: true, disliked: false });
                })
        }
    } else {
        alert("Must be logged in to that");
    }
  }

  handleDislike(e) {
    e.preventDefault();
    if (this.props.currentUser) {
        if (this.state.liked === false && this.state.disliked === false) {
            this.props.dislikeVideo(this.props.video).then(() => {
            this.setState({ liked: false, disliked: true})
            })
            
        } else if (this.state.liked === false && this.state.disliked === true) {
            this.props.destroyVideoLike(
                this.props.video.id, 
                this.props.video.likes.filter(like => like.user_id === this.props.currentUser.id)[0].id).then(() => {
            this.setState({ liked: false, disliked: false });
                })
        } else if (this.state.liked === true && this.state.disliked === false) {
            this.props.destroyVideoLike(
                this.props.video.id, 
                this.props.video.likes.filter(like => like.user_id === this.props.currentUser.id)[0].id)
                .then(() => {
                    this.props.dislikeVideo(this.props.video).then(() => {
                    this.setState({ liked: false, disliked: true })
                    })
                })
        }
    } else {
        alert("Must be logged in to that");
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
    if (!this.props.video.likes) return null;

     let likes = this.props.video.likes;
     let likesCount = likes.filter((like) => like.like === true).length;
     let dislikesCount = likes.filter(
       (like) => like.like === false
     ).length;

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

    let likeStatus = this.state.liked ? "liked-button" : "like-button";
    let dislikeStatus = this.state.disliked
      ? "disliked-button"
      : "dislike-button";

    return (
      <>
        <div className="show-container">
          <video
            className="video-content"
            src={this.props.video.videoUrl}
            type="video/mp4"
            autoPlay
            controls
          ></video>
          <div className="video-playlist-container">
            <span className="next-text">Up next</span>
            <ul className="video-playlist">
              {previewVideos.map((video, idx) => (
                <VideoPreview key={idx} video={video} />
              ))}
            </ul>
          </div>
          <div className="info-container">
            <div className="large-title">{this.props.video.title}</div>
            <div className="expanded-video-info">
              <div
                className="share-button"
                onClick={() => alert(window.location.href)}
              >
                <i className="fas fa-share"></i>
                <div className="share-text">&nbsp;&nbsp;SHARE</div>
              </div>
              <div className={dislikeStatus} onClick={this.handleDislike}>
                <i className="fas fa-thumbs-down"></i>
                <div className="dislikes-count">{dislikesCount}</div>
              </div>
              <div className={likeStatus} onClick={this.handleLike}>
                <i className="fas fa-thumbs-up">
                  <div className="likes-count">{likesCount}</div>
                </i>
              </div>
              <div className="video-views">
                {this.viewDisplay()} views • {this.time} {this.randomSpan} ago
              </div>
              {/* UPDATE WEEKS AGO REFERENCE */}
            </div>
          </div>
          <div className="channel-info">
            <div className={subClass} onClick={this.subscribed}>
              {subText}
            </div>
            <div
              className="user-button-video-show"
              style={{ backgroundColor: this.props.video.userColor }}
            >
              {this.buttonParse()}
            </div>
            <div className="video-creator">
              {this.usernameParse()} {vIcon}
            </div>
            <div className="sub-count">{this.time}.4K subscribers</div>
            <div className="video-description">{toggler}</div>
            <div className="expand-button" onClick={this.textToggle}>
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
