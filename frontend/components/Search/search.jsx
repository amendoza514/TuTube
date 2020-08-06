import React from 'react';
import { Link, withRouter } from "react-router-dom";
import SearchResults from './search_results';
import SideBar from '../Home/sidebar'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.search(this.props.match.params.search)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.search !== this.props.match.params.search) {
            this.props.search(this.props.match.params.search);
        }
    }

    render() {

        let searchResults = (
            <div className="search-results">Results for:  <div className='search-term'>{this.props.match.params.search}</div></div>
            )
    
        return (
          <>
            <SideBar />
            <ul className="search-video-index">
              {searchResults}
              {this.props.videos.map((video, idx) => (
                <SearchResults
                  key={video.id}
                  video={video}
                  idx={idx}
                />
                // <Video key={video.id} video={video} idx={idx} color={video.userColor} search={search}/>
              ))}
            </ul>
          </>
        );
    }
}

export default Search;