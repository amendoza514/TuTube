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

        return (
            <>
                <div className='comment-count'>
                    {this.props.comments.length} 
                    <div className='comments-text'>Comments</div>
                    <div className='sort-icon'><i class="fas fa-sort"></i>&nbsp;&nbsp;SORT BY</div>
                </div>
                <CommentForm currentUser={this.props.currentUser} currentVideo={this.props.match.params.videoId} createComment={this.props.createComment}/>
                <div className='comment-container'>
                    {this.props.comments.map(comment => <CommentIndexItem currentUser={this.props.currentUser} comment={comment} deleteComment={this.props.deleteComment} updateComment = {this.props.updateComment}user={comment.user} userColor ={comment.userColor} />)}
                </div>
            </>
        )
    }
}

export default CommentIndex;






