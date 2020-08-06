import React from 'react';
import { Link, withRouter } from "react-router-dom";
import SearchResults from './search_results';
import SideBar from '../Home/sidebar'
// import noResult from './nosearch.png'

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
        let results;

        if (!this.props.videos.length) {
            results = (
              <ul className="search-video-index">
                <div className="search-results">
                  No search results for:&nbsp;&nbsp;
                  <div className="search-term">
                    {this.props.match.params.search}
                  </div>
                </div>
                {this.props.videos.map((video, idx) => (
                  <SearchResults key={video.id} video={video} idx={idx} />
                ))}
              </ul>
            );

        } else {
            results = (
              <ul className="search-video-index">
                <div className="search-results">
                  Results for:&nbsp;&nbsp;
                  <div className="search-term">
                    {this.props.match.params.search}
                  </div>
                </div>
                {this.props.videos.map((video, idx) => (
                  <SearchResults key={video.id} video={video} idx={idx} />
                ))}
              </ul>
            );
        }
        return (
          <>
            <SideBar />
            {results}
          </>
        );
    }
}

export default Search;