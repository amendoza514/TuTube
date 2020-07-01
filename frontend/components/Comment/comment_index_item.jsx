import React from 'react'

class CommentIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    usernameParse() {
        let s = this.props.user.email;
        let searchString = "@";
        s = s.slice(0, s.indexOf(searchString))
        s = s.split('_').join(' ')
        let words = s.split(' ')
        let newWords = []
        words.forEach(word => newWords.push(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()));
        return newWords.join(' ')
    }

    buttonParse() {
        let s = this.props.user.email
        return s.slice(0, 1);
    }

    render() {
        let span = ['days', 'weeks', 'hours', 'months']
        let randomNumber = Math.floor(Math.random() * 8) + 1
        let randomSpan = span[Math.floor(Math.random() * span.length)];
        return(
            <>
            <div className='comment-cluster'>
                <div className='user-button-comment' style={{ backgroundColor: this.props.user.icon_color }}>{this.buttonParse()}</div>
                    <div className='comment-creator'>{this.usernameParse()}&nbsp;&nbsp;<div className='comment-date'>{randomNumber} {randomSpan} ago</div></div>
                <div className='comment'>{this.props.comment.content}</div>
            </div>
            </>
        )
    }
}

export default CommentIndexItem;