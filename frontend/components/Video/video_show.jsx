import React from 'react'
import { Link } from 'react-router-dom'
import VideoPreview from './video_preview'
import CommentIndexContainer from '../Comment/comment_index_container'

class VideoShow extends React.Component {
    constructor(props) {
        super(props)
        // this.subscribe = this.props.subscribe.bind(this)
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

    // subscribe() {

    // }

    render() {
        if (!this.props.video) return null

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
                            {previewVideos.map( video => <VideoPreview video={video}/>)}
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
                        <div className='user-button-video-show' style={{ backgroundColor: this.props.video.userColor }}>{this.buttonParse()}</div>
                        <div className='video-creator'>{this.usernameParse()} {vIcon}</div>
                        <div className='sub-count'>{randomNumber}.4K subscribers</div>
                        {/* <div className='sub-button' onClick={subscribe()}></div> */}
                    </div>
                    <CommentIndexContainer />
                </div>
            </>
        ) 
    }
}

export default VideoShow;