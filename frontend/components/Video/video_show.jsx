import React from 'react'
import { Link } from 'react-router-dom'

class VideoShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    usernameParse() {
        let s = this.props.video.user;
        let searchString = "@";
        let idx = s.indexOf(searchString);
        return s.slice(0, idx);
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

    render() {
        console.dir(this.props.video)
        if (!this.props.video) return null
        // debugger

        return(
            <>
                <div className ="show-container">
                        <video
                            className="video-content"
                            autoPlay
                            controls
                            >
                            <source src={this.props.video.videoUrl} type="video/mp4" />
                            {/* <source src="https://tutube-seeds.s3-us-west-1.amazonaws.com/2012+Celtics+BIG+Playoffs+Commercial.mp4" type="video/mp4" /> */}
                            
                        </video>
                    <div className='info-container'>
                        <div className='large-title'>{this.props.video.title}</div> 
                        <div className='expanded-video-info'>
                            <div className='video-views'>{this.viewDisplay()} views • 3 weeks ago</div>
                        </div>
                    </div>
                    <div className='channel-info'>
                        <div className='user-button-video-show' >{this.buttonParse()}</div>
                        <div className='video-creator'>{this.usernameParse()}</div>
                        <div className='sub-count'>67.4K subscribers</div>
                    </div>
                </div>
                
                {/* {this.props.video.description} */}
                {/* {this.props.video.user} */}
            </>
        ) 
    }
}

export default VideoShow;