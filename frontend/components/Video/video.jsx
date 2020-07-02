import React from 'react'
import { Link } from 'react-router-dom'

class Video extends React.Component {
    constructor(props){
        super(props)
        this.state = {hover: false}
        this.videoPreview = this.videoPreview.bind(this)
        this.videoClose = this.videoClose.bind(this);

    }

    usernameParse() {
        let s = this.props.video.user;
        let searchString = "@";
        s = s.slice(0, s.indexOf(searchString))
        s = s.split('_').join(' ')
        let words = s.split(' ')
        let newWords = []
        words.forEach(word => newWords.push(word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()));
        return newWords.join(' ')
    }

    buttonParse() {
        let s = this.props.video.user
        return s.slice(0, 1);
    }

    viewCounter() {
        let v = this.props.video.views;
        let s = v.toString()

        if (s.length === 4) {
            return s.slice(0, 1) + 'K'
        } else if (s.length === 5) {
            return s.slice(0, 2) + 'K'
        } else if (s.length === 6) {
            return s.slice(0, 3) + 'K'
        } else if (s.length > 6) {
            return s.slice(0, 1) + 'M'
        } else {
            return s
        }
    }

    videoPreview() {
        this.setState({ hover: true })
        // setTimeout(() => this.setState({ hover: true }), 500)
    }

    videoClose() {
        this.setState({ hover: false })
    }

    titleSpan() {
        let title = this.props.video.title;
        if (title.split('').length > 65) {
            return title.split('').slice(0,65).join('') + '...'
        } else {
            return title
        }
    }

    //what is the best way to make these more modular? I'm recycling in many components

    render() {

        let span = ['days', 'weeks', 'hours', 'minutes', 'months', 'years']
        let randomTime = Math.floor(Math.random() * 24) + 1
        let randomSpan = span[Math.floor(Math.random() * span.length)];
        let vIcon = <i className="fas fa-check-circle"></i>
        if (!this.props.video.user_verified) {
            vIcon = ''
        }

        let visual = <img className='thumb' src={this.props.video.thumbUrl} />
        if (this.state.hover) {
            visual =
                <video
                    className='thumb'
                    src={this.props.video.videoUrl} type="video/mp4"
                    autoPlay
                    muted
                >
                </video>
        }

        return (
            <div>
                <Link to={`/watch/${this.props.video.id}`} onMouseEnter={this.videoPreview} onMouseLeave={this.videoClose}>
                    {visual}
                    {/* <img className='thumb' src={this.props.video.thumbUrl} /> */}
                </Link>
                <div className='title-container'>
                    <div className='user-button-video-index' style={{ backgroundColor: this.props.color }}>{this.buttonParse()}</div>
                    <Link to={`/watch/${this.props.video.id}`} className='video-title'>
                        {this.titleSpan()}
                    </Link>
        
                </div>
                <div className='video-info'>
                    <div className='video-creator'>{this.usernameParse()} {vIcon}</div>
                    <div className='video-views'>{this.viewCounter()} views • {randomTime} {randomSpan} ago</div>
                </div>
            </div>
        )
    }
}

export default Video;

// const EventIndexItem = ({ event, deleteEvent }) => (
//     <li>
//         <Link to={`/events/${event.id}`}>{event.description}</Link>
//         <Link to={`/events/${event.id}/edit`}>Edit</Link>

//         <button onClick={() => deleteEvent(event.id)}>Delete Event</button>
//     </li>
// )

// export default EventIndexItem;