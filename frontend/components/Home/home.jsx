import React from 'react'
import Video from '../Video/video'
import Sidebar from './sidebar'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.shuffle = this.shuffle.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    shuffle(arr) {
        let idx = arr.length, temp, randIdx;

        while (0 !== idx) {
            randIdx = Math.floor(Math.random() * idx);
            idx -= 1;
            temp = arr[idx];
            arr[idx] = arr[randIdx];
            arr[randIdx] = temp; 
        }

    return arr;
    }

    render() {
        let randomizedArr = this.shuffle(this.props.videos)
        if (!this.props.videos) return null

        return (
            <>            
             <Sidebar /> 
                <ul className='main-video-index'>
                    {randomizedArr.map((video, idx) => (  
                        <Video key={video.id} video={video} idx={idx} color={video.userColor}/>
                    ))}
                </ul>
            </>
        )
    }
}

export default Home;

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