import React from "react";
import { withRouter } from 'react-router'

class VideoLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      disliked: false,
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.video.likes.forEach((like) => {
        if (like.user_id === this.props.currentUser.id && like.like === true) {
          this.setState({ liked: true, disliked: false });
        } else if (
          like.user_id === this.props.currentUser.id &&
          like.like === false
        ) {
          this.setState({ liked: false, disliked: true });
        }
      });
    }
  }

  componentDidUpdate(prevProps) {
    //  if ((prevProps.currentUser !== this.props.currentUser)) {
    //    // this.props.fetchVideo(this.props.match.params.videoId);
    //    console.log("changed!");
    //  }
    if (
      prevProps.match.params.videoId !== this.props.match.params.videoId ||
      prevProps.currentUser !== this.props.currentUser
    ) {
      this.setState({ liked: false, disliked: false });
      // ^trying to influence more accurate setting on change
      if (this.props.currentUser) {
        // debugger
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
    }
  }

  handleLike(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      if (this.state.liked === false && this.state.disliked === false) {
        this.props.likeVideo(this.props.video);
        this.setState({ liked: true, disliked: false });
      } else if (this.state.liked === true && this.state.disliked === false) {
        this.props
          .destroyVideoLike(
            this.props.video.id,
            this.props.video.likes.filter(
              (like) => like.user_id === this.props.currentUser.id
            )[0].id
          )
          .then(() => {
            this.setState({ liked: false, disliked: false });
          });
      } else if (this.state.liked === false && this.state.disliked === true) {
        this.props
          .destroyVideoLike(
            this.props.video.id,
            this.props.video.likes.filter(
              (like) => like.user_id === this.props.currentUser.id
            )[0].id
          )
          .then(() => {
            this.props.likeVideo(this.props.video);
            this.setState({ liked: true, disliked: false });
          });
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
          this.setState({ liked: false, disliked: true });
        });
      } else if (this.state.liked === false && this.state.disliked === true) {
        this.props
          .destroyVideoLike(
            this.props.video.id,
            this.props.video.likes.filter(
              (like) => like.user_id === this.props.currentUser.id
            )[0].id
          )
          .then(() => {
            this.setState({ liked: false, disliked: false });
          });
      } else if (this.state.liked === true && this.state.disliked === false) {
        this.props
          .destroyVideoLike(
            this.props.video.id,
            this.props.video.likes.filter(
              (like) => like.user_id === this.props.currentUser.id
            )[0].id
          )
          .then(() => {
            this.props.dislikeVideo(this.props.video).then(() => {
              this.setState({ liked: false, disliked: true });
            });
          });
      }
    } else {
      alert("Must be logged in to that");
    }
  }

  render() {
    if (!this.props.video.likes) return null;

    let likes = this.props.video.likes;
    let likesCount = likes.filter((like) => like.like === true).length;
    let dislikesCount = likes.filter((like) => like.like === false).length;

    let likeStatus = this.state.liked ? "liked-button" : "like-button";
    let dislikeStatus = this.state.disliked
      ? "disliked-button"
      : "dislike-button";
    return (
      <>
        <div className={dislikeStatus} onClick={this.handleDislike}>
          <i className="fas fa-thumbs-down"></i>
          <div className="dislikes-count">{dislikesCount}</div>
        </div>
        <div className={likeStatus} onClick={this.handleLike}>
          <i className="fas fa-thumbs-up">
            <div className="likes-count">{likesCount}</div>
          </i>
        </div>
      </>
    );
  }
}

export default withRouter(VideoLike);