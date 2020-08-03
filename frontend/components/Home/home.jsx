import React from 'react'
import Video from '../Video/video'
import Sidebar from './sidebar'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {

        if (!this.props.videos) return null

        return (
            <>            
             <Sidebar /> 
                <ul className='temp-container'>
                    {this.props.videos.map((video, idx) => (  
                        <Video key={video.id} video={video} idx={idx} color={video.userColor}/>
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