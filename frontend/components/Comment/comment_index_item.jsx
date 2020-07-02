import React from 'react'

class CommentIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {hover: false, toggle:false}
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleHover = this.toggleHover.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.toggleReport = this.toggleReport.bind(this)
    }

    handleDelete(e) {
        e.preventDefault()
            this.props.deleteComment(this.props.comment.id)
    }

    usernameParse() {
        let s = this.props.user;
        let searchString = "@";
        s = s.slice(0, s.indexOf(searchString))
        s = s.split('_').join(' ')
        let words = s.split(' ')
        let newWords = []
        words.forEach(word => newWords.push(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()));
        return newWords.join(' ')
    }

    buttonParse() {
        let s = this.props.user
        return s.slice(0, 1);
    }

    toggleHover(){
        this.setState({hover: !this.state.hover })
    }

    toggleMenu(){
        this.setState({ toggle: !this.state.toggle })
    }

    toggleReport() {
            alert("comment reported")
    }

    render() {
        let span = ['days', 'weeks', 'hours', 'months']
        // let randomNumber = Math.floor(Math.random() * 8) + 1
        // let randomSpan = span[Math.floor(Math.random() * span.length)];
        let hoverClass;
        if (this.state.hover) {
            hoverClass = 'comment-options'
        } else {
            hoverClass = 'comment-options-off'
        }


        let optionsText;
        if ((this.props.currentUser) && (this.props.currentUser.id === this.props.comment.user_id)) {
            optionsText = 
                <div className="comment-options-type" onClick={this.handleDelete}>
                    <i class="fas fa-trash-alt"></i>
                    <div >&nbsp;&nbsp;Delete</div>
                </div>

        } else {
            optionsText = 
                <div className="comment-options-type" >
                    <i class="fas fa-flag"></i>
                    <div onClick={this.toggleReport}>&nbsp;&nbsp;Report</div>
                </div>
        }

        

        let toggleClass;
        if (this.state.toggle) {
            toggleClass = 'options-dropdown'
        } else {
            toggleClass = 'options-dropdown-off'
        }
        return(
            <>
            <div className='comment-cluster' onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    <div className='user-button-comment' style={{ backgroundColor: this.props.userColor }}>{this.buttonParse()}</div>
                    <div className={hoverClass} onClick={this.toggleMenu} >
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                    <div className={toggleClass} onClick={this.toggleMenu}>{optionsText}</div>
                    <div className='comment-creator'>{this.usernameParse()}&nbsp;&nbsp;<div className='comment-date'>{this.props.comment.createdAt }</div></div>
                <div className='comment' >{this.props.comment.content}</div>
            </div>
            </>
        )
    }
}

export default CommentIndexItem;

//experiment: {this.props.comment.createdAt}
// old: {randomNumber} {randomSpan} ago