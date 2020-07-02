import React from 'react'
import { Link } from 'react-router-dom'

class VideoPreview extends React.Component {
    constructor(props) {
        super(props)
    }

    usernameParse() {
        let s = this.props.video.user;
        let searchString = "@";
        s = s.slice(0, s.indexOf(searchString))
        s = s.split('_').join(' ')
        let words = s.split(' ')
        let newWords = []
        words.forEach(word => newWords.push(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()));
        return newWords.join(' ')
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
    
    viewDisplay() {
        let v = this.props.video.views;
        let s = v.toString()
        return s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }

    titleSpan() {
        let title = this.props.video.title;
        if (title.split('').length > 50) {
            return title.split('').slice(0, 50).join('') + '...'
        } else {
            return title
        }
    }

    render() {
        let span = ['days', 'weeks', 'hours', 'minutes', 'months', 'years']
        let randomNumber = Math.floor(Math.random() * 24) + 1
        let randomSpan = span[Math.floor(Math.random() * span.length)];

        let vIcon = <i className="fas fa-check-circle" ></i>
        if (!this.props.video.user_verified) {
            vIcon = '';
        }

        return (
            <>
                <div>
                    <Link to={`/watch/${this.props.video.id}`}  >
                        <img className='small-thumb' src={this.props.video.thumbUrl} />
                        <Link to={`/watch/${this.props.video.id}`} className='preview-title'>
                            {this.titleSpan()}
                        </Link>
                    </Link>
                        <div className='preview-creator'>{this.usernameParse()} {vIcon}</div>
                        <div className='preview-views'>{this.viewCounter()} views • {randomNumber} {randomSpan} ago</div>
                </div>
            </>
        )
    }
}
//FIX seperate link within link
export default VideoPreview