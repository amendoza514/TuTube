import React from 'react'
import { Link } from 'react-router-dom'
import VideoPreview from './video_preview'
import CommentIndexContainer from '../Comment/comment_index_container'

class VideoShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {subscribe: false, textToggle: false}
        this.subscribed = this.subscribed.bind(this) 
        this.textToggle = this.textToggle.bind(this)
    }

    textToggle() {
        this.setState({ textToggle: !this.state.textToggle })
    }

    textReducer() {
        if (this.props.video.description.length > 300){
            return this.props.video.description.slice(0,300) + '...'
        } else {
            return this.props.video.description
        }
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId){
            this.props.fetchVideo(this.props.match.params.videoId);
        }
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

    buttonParse() {
        let s = this.props.video.user
        return s.slice(0, 1);
    }

    viewDisplay() {
        let v = this.props.video.views;
        let s = v.toString()
        return s.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }

    subscribed() {
        this.setState({ subscribe: !this.state.subscribe })
        if (!this.state.subscribe){
            alert(`Subscribed to ${this.usernameParse()}`)
        } else {
            alert('No worries, you werent subscribed to begin with')
        }
    }

    render() {
        if (!this.props.video) return null

        let toggler;
        let expandText;
        if (!this.state.textToggle && this.props.video.description.length > 300) {
            toggler = this.textReducer()
            expandText = 'SHOW MORE'
        } else if (this.props.video.description.length <= 300) {
            toggler = this.props.video.description
            expandText = ''
        } else if (this.state.textToggle) {
            toggler = this.props.video.description
            expandText = 'SHOW LESS'
        }

        let span = ['days', 'weeks', 'hours', 'minutes', 'months', 'years']
        let randomNumber = Math.floor(Math.random() * 24) + 1
        let randomSpan = span[Math.floor(Math.random() * span.length)];
        
        let vIcon = <i className="fas fa-check-circle"></i>
        if (!this.props.video.user_verified) {
            vIcon = '';
        }

        const previewVideos = this.props.previewIds.map(id => this.props.allVideos[id])
        //QUESTION lost what happens here
        console.log(this.props.video.videoUrl)

        let subClass = 'unsubscribed_button';
        let subText = 'SUBSCRIBE'
        if (this.state.subscribe) {
            subClass = 'subscribe_button'
            subText = 'SUBSCRIBED'
        }

        return(
            <>
                <div className ="show-container">
                        <video
                            className="video-content"
                            src={this.props.video.videoUrl} type="video/mp4" 
                            autoPlay
                            controls>
                        </video>
                    <div className='video-playlist-container'>
                        <span className='next-text'>Up next</span>
                        <ul className='video-playlist'>
                            {previewVideos.map((video, idx)=> <VideoPreview key={ idx }  video={video}/>)}
                        </ul>
                    </div>
                    <div className='info-container'>
                        <div className='large-title'>{this.props.video.title}</div> 
                        <div className='expanded-video-info'>
                            <div className='video-views'>{this.viewDisplay()} views • {randomNumber} {randomSpan} ago</div>
                            {/* UPDATE WEEKS AGO REFERENCE */}
                        </div>
                    </div>
                    <div className='channel-info'>
                       <div className={subClass} onClick={this.subscribed}>{subText}</div>
                        <div className='user-button-video-show' style={{ backgroundColor: this.props.video.userColor }}>{this.buttonParse()}</div>
                        <div className='video-creator'>{this.usernameParse()} {vIcon}</div>
                        <div className='sub-count'>{randomNumber}.4K subscribers</div>
                        <div className='video-description'>{toggler}</div>
                        <div className='expand-button' onClick={this.textToggle}>{expandText}</div>
                        {/* <div className='sub-button' onClick={subscribe()}></div> */}
                    </div>
                    <CommentIndexContainer />
                </div>
            </>
        ) 
    }
}

export default VideoShow;