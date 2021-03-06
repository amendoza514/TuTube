import React from 'react'
import CommentIndexItem from './comment_index_item'
import CommentForm from './comment_form'

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sorted: false, toggle: false };
    this.handleSort = this.handleSort.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  buttonParse() {
    let s = this.props.currentUser.email;
    return s.slice(0, 1);
  }

  handleSort(e) {
    e.preventDefault();
      if (!this.state.sorted) this.setState({ sorted: true });
      if (this.state.sorted) this.setState({ sorted: false });
  }

  toggleMenu(e) {
    e.preventDefault();
    if (!this.state.toggle) this.setState({ toggle: true });
    if (this.state.toggle) this.setState({ toggle: false });
  }

  render() {
    let revArr = [];

    if (!this.state.sorted) {
      for (let i = this.props.comments.length - 1; i >= 0; i--) {
        revArr.push(this.props.comments[i]);
      }
    } else {
      let sorted = this.props.comments
        .sort((a, b) => a.likes.length - b.likes.length)
        .slice();
      revArr = sorted;
    }

    let countStyle =
      this.props.mode === false ? "comments-count" : "dark-comments-count";
    let sortStyle = this.props.mode === false ? "sort-icon" : "dark-sort-icon";

    let toggleSort;
        if (this.state.toggle) {
          toggleSort = "sort-dropdown";
        } else {
          toggleSort = "sort-dropdown-off";
        }

    let sortOptions = (
      <div
        className="sort-options"
        onMouseLeave={() => this.setState({ toggle: false })}
      >
        <div
          className="sort-options-report"
          onClick={() => this.setState({ sorted: false })}
        >
          <div>&nbsp;&nbsp;Top Comments</div>
        </div>
        <div
          className="sort-options-type"
          onClick={() => this.setState({ sorted: true })}
        >
          <div>&nbsp;&nbsp;Newest first</div>
        </div>
        <div
          className="sort-options-back"
          onClick={() => this.setState({ sorted: false })}
        >
          <div>&nbsp;&nbsp;Back</div>
        </div>
      </div>
    );

    return (
      <>
        <div className={countStyle}>
          {this.props.comments.length}
          <div className="comments-text">Comments</div>
          <div
            className={sortStyle}
            onClick={this.toggleMenu}
            // onMouseLeave={() => this.setState({ toggle: false })}
          >
            <i className="fas fa-sort"></i>
            &nbsp;&nbsp;SORT BY
            <div
              className={toggleSort}
              onMouseLeave={() => this.setState({ toggle: false })}
            >
              {sortOptions}
            </div>
          </div>
        </div>
        <CommentForm
          currentUser={this.props.currentUser}
          currentVideo={this.props.match.params.videoId}
          createComment={this.props.createComment}
          mode={this.props.mode}
        />
        <div className="comment-container">
          {revArr.map((comment, idx) => {
            return (
              <CommentIndexItem
                key={idx}
                currentUser={this.props.currentUser}
                comment={comment}
                deleteComment={this.props.deleteComment}
                updateComment={this.props.updateComment}
                likeComment={this.props.likeComment}
                dislikeComment={this.props.dislikeComment}
                destroyCommentLike={this.props.destroyCommentLike}
                user={comment.user}
                userColor={comment.userColor}
                mode={this.props.mode}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default CommentIndex;






