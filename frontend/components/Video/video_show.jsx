import React from 'react'
import { Link } from 'react-router-dom'

class VideoShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    render() {
        return(
            <>
                <video
                    className="video-content"
                    autoPlay
                    controls
                    width="750" height="500"
                    >
                    <source src={this.props.video.videoUrl} type="video/mp4" />
                    <source src="https://tutube-seeds.s3-us-west-1.amazonaws.com/2012+Celtics+BIG+Playoffs+Commercial.mp4" type="video/mp4" />
                </video>
                
                {/* {this.props.video.description} */}
                {/* {this.props.video.user} */}
            </>
        ) 
    }
}

export default VideoShow;