import React from 'react'
import CommentIndexItem from './comment_index_item'
import CommentForm from './comment_form'

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
    }


    buttonParse() {
        let s = this.props.currentUser.email
        return s.slice(0, 1);
    }

    render() {
        let revArr = [];
        for (let i = this.props.comments.length - 1; i >=0; i--) {
            revArr.push(this.props.comments[i])
        }

        let countStyle = this.props.mode === false ? "comments-count" : "dark-comments-count";
        return (
            <>
                <div className={countStyle}>
                    {this.props.comments.length} 
                    <div className="comments-text">Comments</div>
                    <div className='sort-icon'><i className="fas fa-sort"></i>&nbsp;&nbsp;SORT BY</div>
                </div>
                <CommentForm currentUser={this.props.currentUser} currentVideo={this.props.match.params.videoId} createComment={this.props.createComment} />
                <div className='comment-container'>
                    {revArr.map((comment, idx) => { return(
                    <CommentIndexItem 
                      key={idx} currentUser={this.props.currentUser} 
                      comment={comment} 
                      deleteComment={this.props.deleteComment} 
                      updateComment = {this.props.updateComment}
                      likeComment={this.props.likeComment}
                      dislikeComment={this.props.dislikeComment}
                      destroyCommentLike={this.props.destroyCommentLike}
                      user={comment.user} 
                      userColor ={comment.userColor} />)
                    })}
                </div>
            </>
        )
    }
}

export default CommentIndex;






