import React from 'react';

class CommentLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      disliked: false,
    };
    // this.handleLike = this.handleLike.bind(this);
    // this.handleDislike = this.handleDislike.bind(this);
  }

  componentDidMount() {
      console.log(this.props.comment)
    // if (this.props.currentUser) {
    //     this.props.comment.likes.forEach((like) => {
    //         if (like.user_id === this.props.currentUser.id && like.like === true) {
    //         this.setState({ liked: true, disliked: false });
    //         } else if (
    //         like.user_id === this.props.currentUser.id &&
    //         like.like === false
    //         ) {
    //         this.setState({ liked: false, disliked: true });
    //         }
    //     });
    //     }
  }

//   handleLike(e) {
//     e.preventDefault();
//     if (this.props.currentUser) {
//       if (this.state.liked === false && this.state.disliked === false) {
//         this.props.likeComment(this.props.comment);
//         this.setState({ liked: true, disliked: false });
//       } else if (this.state.liked === true && this.state.disliked === false) {
//         this.props.destroyCommentLike(
//           this.props.comment.id,
//           this.props.comment.likes.filter(
//             (like) => like.user_id === this.props.currentUser.id
//           )[0].id
//         );
//         this.setState({ liked: false, disliked: false });
//       } else if (this.state.liked === false && this.state.disliked === true) {
//         this.props
//           .destroyCommentLike(
//             this.props.comment.id,
//             this.props.comment.likes.filter(
//               (like) => like.user_id === this.props.currentUser.id
//             )[0].id
//           )
//           .then(() => {
//             this.props.likeComment(this.props.comment);
//             this.setState({ liked: true, disliked: false });
//           });
//       }
//     } else {
//       alert("Must be logged in to that");
//     }
//   }

//   handleDislike(e) {
//     e.preventDefault();
//     if (this.props.currentUser) {
//       if (this.state.liked === false && this.state.disliked === false) {
//         this.props.dislikeComment(this.props.comment).then(() => {
//           this.setState({ liked: false, disliked: true });
//         });
//       } else if (this.state.liked === false && this.state.disliked === true) {
//         this.props
//           .destroyCommentLike(
//             this.props.comment.id,
//             this.props.comment.likes.filter(
//               (like) => like.user_id === this.props.currentUser.id
//             )[0].id
//           )
//           .then(() => {
//             this.setState({ liked: false, disliked: false });
//           });
//       } else if (this.state.liked === true && this.state.disliked === false) {
//         this.props
//           .destroyCommentLike(
//             this.props.comment.id,
//             this.props.comment.likes.filter(
//               (like) => like.user_id === this.props.currentUser.id
//             )[0].id
//           )
//           .then(() => {
//             this.props.dislikeComment(this.props.comment).then(() => {
//               this.setState({ liked: false, disliked: true });
//             });
//           });
//       }
//     } else {
//       alert("Must be logged in to that");
//     }
//   }

  render() {
        //   if (!this.props.comment.likes) return null;

    //    let likes = this.props.comment.likes;
    //    let likesCount = likes.filter((like) => like.like === true).length;
    //    let dislikesCount = likes.filter((like) => like.like === false).length;

    //    let likeStatus = this.state.liked ? "liked-button" : "like-button";
    //    let dislikeStatus = this.state.disliked
    //      ? "disliked-button"
    //      : "dislike-button";
    return (
      <>
        <div className="thumbs">
          <div className="comment-like-button">
            <i className="fas fa-thumbs-up"></i>
            {/* {likesCount} */}
          </div>
          <div className="comment-dislike-button">
            <i className="fas fa-thumbs-down"></i>
            {/* {dislikesCount} */}
          </div>
        </div>
      </>
    );
  }
}

export default CommentLike;