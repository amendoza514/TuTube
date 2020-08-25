import React from 'react';
import { withRouter } from 'react-router'


class CommentLike extends React.Component {
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
      // debugger
    if (this.props.currentUser) {
        this.props.comment.likes.forEach((like) => {
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
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.setState({ liked: false, disliked: false });
      // ^trying to influence more accurate setting on change
      if (this.props.currentUser) {
        this.props.comment.likes.forEach((like) => {
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
  }

  handleLike(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      if (this.state.liked === false && this.state.disliked === false) {
        this.props.likeComment(this.props.comment);
        this.setState({ liked: true, disliked: false });
      } else if (this.state.liked === true && this.state.disliked === false) {
        this.props.destroyCommentLike(
          this.props.comment.id,
          this.props.comment.likes.filter(
            (like) => like.user_id === this.props.currentUser.id
          )[0].id
        );
        this.setState({ liked: false, disliked: false });
      } else if (this.state.liked === false && this.state.disliked === true) {
        this.props
          .destroyCommentLike(
            this.props.comment.id,
            this.props.comment.likes.filter(
              (like) => like.user_id === this.props.currentUser.id
            )[0].id
          )
          .then(() => {
            this.props.likeComment(this.props.comment);
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
        this.props.dislikeComment(this.props.comment).then(() => {
          this.setState({ liked: false, disliked: true });
        });
      } else if (this.state.liked === false && this.state.disliked === true) {
        this.props
          .destroyCommentLike(
            this.props.comment.id,
            this.props.comment.likes.filter(
              (like) => like.user_id === this.props.currentUser.id
            )[0].id
          )
          .then(() => {
            this.setState({ liked: false, disliked: false });
          });
      } else if (this.state.liked === true && this.state.disliked === false) {
        this.props
          .destroyCommentLike(
            this.props.comment.id,
            this.props.comment.likes.filter(
              (like) => like.user_id === this.props.currentUser.id
            )[0].id
          )
          .then(() => {
            this.props.dislikeComment(this.props.comment).then(() => {
              this.setState({ liked: false, disliked: true });
            });
          });
      }
    } else {
      alert("Must be logged in to that");
    }
  }

  render() {
      // if (!this.props.comment.likes) return null;
      //QUESTION ^

      let likes = this.props.comment.likes;
      let commentLikesCount = likes.filter((like) => like.like === true).length;
      let commentDislikesCount = likes.filter((like) => like.like === false).length;

      let commentLikeStatus = this.state.liked ? "comment-liked-button" : "comment-like-button";
      let commentDislikeStatus = this.state.disliked
        ? "comment-disliked-button"
        : "comment-dislike-button";
    return (
      <>
        <div className="thumbs">
          <div className={commentLikeStatus} onClick={this.handleLike}>
            <i className="fas fa-thumbs-up"></i>
            <div className="comment-likes-count">{commentLikesCount}</div>
          </div>
          <div className={commentDislikeStatus} onClick={this.handleDislike}>
            <i className="fas fa-thumbs-down"></i>
            <div className="comment-dislikes-count">{commentDislikesCount}</div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CommentLike);