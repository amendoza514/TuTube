import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchVideos();
    }


    render() {

        let temp = [
            window.corgiOneUrl,
            window.corgiTwoUrl,
            window.corgiThreeUrl,
            window.corgiFourUrl,
            window.corgiFiveUrl,
            window.goatOneUrl
        ]

        if (!this.props.videos) return null

        return (
            
            <>            
                    <ul className='temp-container'>
                        {this.props.videos.map((video, idx) => (  
                            <div>
                                <video className="video-content" autoPlay controls>
                                    <source src={video.videoUrl} type="video/mp4"/>
                                </video>
                                <img className='temp' src={temp[idx]} />
                                <figcaption className='temp-title'>{video.description}</figcaption>
                            </div>
                        ))}
                    </ul>
            </>
        )
    }
}

export default Home;
// <Video key={video.id] video={video} fetchVideo={this.props.fetchVideo}/>

// <div>
//     <Modal />
//     <Navbar />

//     <Switch>
//         <Route path="/login" component={AuthComponenetContainer} />
//         <Route path="/signup" component={SignupComponentContainer} />
//         <Route exact path="/" component={HomeComponentContainer} />
//         <Redirect to="/" component={HomeComponentContainer} />
//     </Switch>
// </div>