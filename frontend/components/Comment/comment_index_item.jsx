import React from 'react';
import UpdateForm from "./update_form";
import { withRouter } from "react-router-dom";
import CommentLike from './comment_like'

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, toggle: false, needsEdit: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleReport = this.toggleReport.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.datePosted = this.datePosted.bind(this);
  }

  componentDidMount() {
    // console.log(this.props)
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

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  handleUpdate(e) {
    e.preventDefault();
    this.setState({
      needsEdit: !this.state.needsEdit,
      hover: false,
      toggle: false,
    });
  }

  usernameParse() {
    let s = this.props.user;
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
    let s = this.props.user;
    return s.slice(0, 1);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  toggleMenu() {
    this.setState({ toggle: !this.state.toggle });
  }

  toggleReport() {
    alert("comment reported :)");
  }

  render() {
    //temp
    let hoverClass = "comment-options";

    let creatorStyle = this.props.mode === false ? 'comment-creator' : 'dark-comment-creator';
    let dateStyle = this.props.mode === false ? 'comment-date' : 'dark-comment-date';
    let commentStyle = this.props.mode === false ? 'comment' : 'dark-comment';

    let optionsText;
    if (
      this.props.currentUser &&
      this.props.currentUser.id === this.props.comment.user_id
    ) {
      optionsText = (
        <>
          <div
            className="options-user"
            onMouseLeave={() => this.setState({ toggle: false })}
          >
            <div className="comment-options-type" onClick={this.handleUpdate}>
              <i className="fas fa-redo-alt"></i>
              <div>&nbsp;&nbsp;Update</div>
            </div>

            <div className="comment-options-type" onClick={this.handleDelete}>
              <i className="fas fa-trash-alt"></i>
              <div>&nbsp;&nbsp;Delete</div>
            </div>

            <div
              className="comment-options-type"
              onClick={() => this.setState({ needsEdit: false })}
            >
              <i className="fas fa-long-arrow-alt-left"></i>
              <div>&nbsp;&nbsp;Back</div>
            </div>
          </div>
        </>
      );
    } else {
      optionsText = (
        <div
          className="options"
          onMouseLeave={() => this.setState({ toggle: false })}
        >
          <div className="comment-options-report" onClick={this.toggleReport}>
            <i className="fas fa-flag"></i>
            <div>&nbsp;&nbsp;Report</div>
          </div>
          <div
            className="comment-options-type"
            onClick={() => this.setState({ needsEdit: false })}
          >
            <i className="fas fa-long-arrow-alt-left"></i>
            <div>&nbsp;&nbsp;Back</div>
          </div>
        </div>
      );
    }

    let toggleClass;
    if (this.state.toggle) {
      toggleClass = "options-dropdown";
    } else {
      toggleClass = "options-dropdown-off";
    }

    let editForm;

    if (this.state.needsEdit === true) {
      editForm = (
        <UpdateForm
          currentUser={this.props.currentUser}
          currentVideo={this.props.match.params.videoId}
          updateComment={this.props.updateComment}
          handleUpdate={this.handleUpdate}
          comment={this.props.comment.content}
          id={this.props.comment.id}
        />
      );
    } else {
      editForm = (
        <>
          <div
            className="comment-cluster"
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          >
            <div
              className="user-button-comment"
              style={{ backgroundColor: this.props.userColor }}
            >
              {this.buttonParse()}
            </div>
            <div className={hoverClass} onClick={this.toggleMenu}>
              <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className={toggleClass} onClick={this.toggleMenu}>
              {optionsText}
            </div>
            <div className={creatorStyle}>
              {this.usernameParse()}&nbsp;&nbsp;
              <div className={dateStyle}>{this.datePosted(this.props.comment.created_at)}</div>
            </div>
            <div className={commentStyle}>{this.props.comment.content}</div>
            <CommentLike
              currentUser={this.props.currentUser}
              comment={this.props.comment}
              likeComment={this.props.likeComment}
              dislikeComment={this.props.dislikeComment}
              destroyCommentLike={this.props.destroyCommentLike}
            />
          </div>
        </>
      );
    }

    return <>{editForm}</>;
  }
}

export default withRouter(CommentIndexItem);