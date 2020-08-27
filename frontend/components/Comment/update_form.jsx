import React from "react";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      selected: true,
      placeholder: "edit",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    if (this.props.update) {
      this.setState({ placeholder: "update" });
    }
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      content: this.state.content,
      user_id: this.props.currentUser.id,
    //   video_id: this.props.currentVideo,
    };
    this.props.updateComment(comment);    
   this.props.handleUpdate(e)
  }

  buttonParse() {
    let s = this.props.currentUser.email;
    return s.slice(0, 1);
  }

  handleEnter(e) {
    if (e.charCode === 13) {
      e.preventDefault();
    }
  }

  toggle() {
    //prevProps, look up why I'm approaching this incorrectly
    this.setState({ selected: true });
  }

  render() {
    let toggleClass = "comment-buttons-off";
    if (this.state.selected) {
      toggleClass = "comment-buttons";
    }
    
    let inputStyle = this.props.mode === false ? 'new-comment-input' : 'dark-new-comment-input' 


    let newComment;
    if (this.props.currentUser) {
      newComment = (
        <form className="new-comment-cluster">
          <div
            className="new-comment-button"
            style={{ backgroundColor: this.props.currentUser.icon_color }}
          >
            {this.buttonParse()}
          </div>
          <input
            id={inputStyle}
            type="text"
            placeholder={this.props.comment}
            onKeyPress={this.handleEnter}
            onClick={this.toggle}
            autoComplete="off"
            onChange={this.handleInput("content")}
            value={this.state.content}
          />
          <div className={toggleClass}>
            <button
              id="comment-submit-button"
              onClick={this.handleSubmit}
              // onClick={(e) => {
              //     this.handleSubmit(e)
              //     this.props.handleUpdate(e)
              // }}
            >
              UPDATE
            </button>
            <button
              id="comment-cancel-button"
              onClick={this.props.handleUpdate}
            >
              CANCEL
            </button>
          </div>
        </form>
      );
    }

    return <>{newComment}</>;
  }
}

export default UpdateForm;
