import React from 'react'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { content: '', selected: false, placeholder: 'Add a public comment...'}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    handleInput(type) {
        return e => {
            this.setState({[type]: e.target.value});
        }
    }

    // This will be where we create our input data to submit our comment
    handleSubmit(e) {
        e.preventDefault();
        const comment = { content: this.state.content, user_id: this.props.currentUser.id, video_id: this.props.currentVideo }
        this.props.createComment(comment).then(this.setState({ content: '' }))
    
    }

    buttonParse() {
        let s = this.props.currentUser.email
        return s.slice(0, 1);
    }

    handleEnter(e){
        if (e.charCode === 13) {
            e.preventDefault()
        }
    }

    toggle() {
        //prevProps, look up why I'm approaching this incorrectly
       this.setState({ selected: !this.state.selected})
    }

    render() {

        let toggleClass = 'comment-buttons-off';
        if (this.state.selected) {
            toggleClass = 'comment-buttons'        
        }
      
        let newComment;
        if (this.props.currentUser) {
            newComment =
                <form className='new-comment-cluster'>
                    <div className='new-comment-button' style={{ backgroundColor: this.props.currentUser.icon_color }}>
                        {this.buttonParse()}
                    </div>
                    <input
                        id='new-comment-input'
                        type ="text"
                        placeholder='Add a public comment...'
                        onKeyPress={this.handleEnter}
                        onClick={this.toggle}
                        autoComplete="off"
                        onChange={this.handleInput('content')}
                        value={this.state.content}
                    />
                    <div className={toggleClass}>
                        <button id='comment-submit-button' onClick={this.handleSubmit}>COMMENT</button>
                    <button id='comment-cancel-button' onClick={this.toggle} >CANCEL</button>
                    </div>
                </form>
        }

        return (
            <>
                {newComment}
            </>
        )
    }
}

export default CommentForm