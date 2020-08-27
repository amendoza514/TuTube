import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
         this.state = { search: "" };
         this.handleInput = this.handleInput.bind(this);
         this.handleSearch = this.handleSearch.bind(this);
         this.handleEnter = this.handleEnter.bind(this);
    }

    handleEnter(e) {
        if (e.charCode === 13) {
            this.handleSearch();
        }
    }

    handleInput(type) {
        return e => {
            this.setState({[type]: e.target.value});
        }
    }

    handleSearch() {
        let search = this.state.search;
        this.props.history.push(`/search/${search}`);
        let reset = (this.state.search = "");
        this.setState({ reset });
    }

    render (){
      let searchStyle =
        this.props.mode === false ? "search-bar" : "dark-search-bar";
      let buttonStyle =
        this.props.mode === false ? "search-button" : "dark-search-button";

        return (
          <>
            <div className="search">
              <input
                type="text"
                id={searchStyle}
                placeholder="Search"
                onKeyPress={this.handleEnter}
                onChange={this.handleInput("search")}
                value={this.state.search}
              />
              <button id={buttonStyle} onClick={this.handleSearch}>
                🔍
              </button>
            </div>
          </>
        );
    }
}

export default withRouter(SearchBar);