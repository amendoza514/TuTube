import React from 'react'
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
    }
    buttonParse() {
        let s = this.props.currentUser.email
        return s.slice(0, 1);
    }

    render() {
        let icon = 
            <div className='new-comment-cluster'>
                <div className='new-comment-button' style={{ backgroundColor: 'black' }}>
                    {this.buttonParse()}
                </div>
                <input id='new-comment-input' type="text" placeholder='Add a public comment...'/>
            </div>
    
        if (!this.props.currentUser){
            icon = <div></div>
        }

        return (
            <>
                <div className='comment-count'>{this.props.comments.length} Comments</div>
                {icon}
                <div className='comment-container'>
                    {this.props.comments.map(comment => <CommentIndexItem comment={comment} user={comment.user} />)}
                </div>
            </>
        )
    }
}

export default CommentIndex;






