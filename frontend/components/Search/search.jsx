import React from 'react';
import { Link, withRouter } from "react-router-dom";
import SearchResults from './search_results';
import SideBar from '../Home/sidebar'
import { searchVideos } from '../../util/video_api_util';
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
      let resultsStyle;
      let indexStyle;

        if (this.props.mode === false) {
          resultsStyle = "search-results";
          indexStyle = "search-video-index";
          $("body").css("background-color", "#f5f5f5");
        } else if (this.props.mode === true) {
          resultsStyle = "dark-search-results";
          indexStyle = "dark-search-video-index";
          $("body").css("background-color", "#181818");
        }

        let results;

        if (!this.props.videos.length) {
            results = (
              <ul className={indexStyle}>
                <div className={resultsStyle}>
                  No search results for:&nbsp;&nbsp;
                  <div className="search-term">
                    {this.props.match.params.search}
                  </div>
                </div>
                {this.props.videos.map((video, idx) => (
                  <SearchResults key={video.id} video={video} idx={idx} mode={this.props.mode}/>
                ))}
              </ul>
            );

        } else {
            results = (
              <ul className={indexStyle}>
                <div className={resultsStyle}>
                  Results for:&nbsp;&nbsp;
                  <div className="search-term">
                    {this.props.match.params.search}
                  </div>
                </div>
                {this.props.videos.map((video, idx) => (
                  <SearchResults key={video.id} video={video} idx={idx} mode={this.props.mode}/>
                ))}
              </ul>
            );
        }
        return (
          <>
            <SideBar mode={this.props.mode} />
            {results}
          </>
        );
    }
}

export default Search;