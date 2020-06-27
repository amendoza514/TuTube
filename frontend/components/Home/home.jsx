import React from 'react'
import Sidebar from './sidebar'

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
                <Sidebar />
                    <ul className='temp-container'>
                        {this.props.videos.map((video, idx) => (  
                            <div>
                                <img className='temp' src={temp[idx]} />
                                <figcaption className='temp-title'>{video.title}</figcaption>
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