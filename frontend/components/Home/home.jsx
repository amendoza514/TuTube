import React from 'react'
import Video from '../Video/video'
import Sidebar from './sidebar'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        if (this.props.searchTerms) {
          console.log("WOW LOOK SEARCHES COOL");
        }
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        let search = this.props.searchTerms ? true : false;
        let displayType = !this.props.searchTerms ? 'main-video-index' : 'search-video-index';
        let searchResults;
        if (this.props.searchTerms) {
            searchResults = (
            <div className="search-results">Results for:    {this.props.searchTerms}</div>
            )
        }
        let filteredVideos;
        if (this.props.searchTerms !== '') {
            filteredVideos = this.props.videos.filter(
              (video) =>
                video.title
                  .toLowerCase()
                  .includes(this.props.searchTerms.toLowerCase()) ||
                video.title
                  .toLowerCase()
                  .includes(this.props.searchTerms.toLowerCase().slice(0, this.props.searchTerms.length - 1))
            );
        } else {
            filteredVideos = this.props.videos
        }
        if (!this.props.videos) return null

        return (
            <>            
             <Sidebar /> 
                <ul className={displayType}>
                    {searchResults}
                    {filteredVideos.map((video, idx) => (  
                        <Video key={video.id} video={video} idx={idx} color={video.userColor} search={search}/>
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