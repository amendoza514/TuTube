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
        return (
          <>
            <div className="search">
              <input
                type="text"
                id="search-bar"
                placeholder="Search"
                onKeyPress={this.handleEnter}
                onChange={this.handleInput("search")}
                value={this.state.search}
              />
              <button id="search-button" onClick={this.handleSearch}>
                🔍
              </button>
            </div>
          </>
        );
    }
}

export default withRouter(SearchBar);