import React from 'react'
import Video from '../Video/video'
import Sidebar from './sidebar'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, filters: [] };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.tagType = this.tagType.bind(this);
  }

  show() {
    this.setState({ hover: true });
  }

  hide() {
    this.setState({ hover: false });
  }

  addFilter(value) {
    // if (!this.state.filters.includes(value)) {
    //   let newFilters = this.state.filters.concat(value);
    //   this.setState({ filters: newFilters });
    // } else {
    //   console.log("filter already entered");
    // }
    if (this.state.filters[0] !== value) {
        this.setState({ filters: [value] });
    } else {
        this.setState({ filters: []})
    }
  }

  tagType(tag) {
    let type;
    type = this.state.filters[0] === tag ? 'tag-active' : 'tag';
    return type;
  }

  resetFilters() {
    this.setState({ filters: [] });
  }

  componentDidMount() {
    this.props.fetchVideos();
    // this.shuffle(this.props.videos)
  }

  componentDidUpdate() {
    // console.log(this.state.filters)
    // this.filteredVideos = this.props.videos.filter((video) =>
    //   video.tags.includes(this.state.filters[0])
    // );
  }

  shuffle(arr) {
    let idx = arr.length,
      temp,
      randIdx;

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
    let scrollDisplay;
      this.state.hover === false ? "video-tags-hide" : "video-tags-show";
      if (this.props.mode === false && this.state.hover === false) {
        scrollDisplay = "video-tags-hide";
        $("body").css("background-color", "#f5f5f5");
      } else if (this.props.mode === true && this.state.hover === false) {
        scrollDisplay = "dark-video-tags-hide";
        $("body").css("background-color", "#181818");
      } else if (this.props.mode === false && this.state.hover === true) {
        scrollDisplay = "video-tags-show";
        $("body").css("background-color", "#f5f5f5");
      } else {
        scrollDisplay = "dark-video-tags-show";
        $("body").css("background-color", "#181818");
      }

    // let randomizedArr = this.shuffle(this.props.videos);
    // let filteredVideos;
    // if (this.state.filters === []) {
    //   filteredVideos = this.props.videos;
    // } else {
    //   filteredVideos = this.props.videos.filter((video) =>
    //     video.tags.includes(this.state.filters[0])
    //   );
    // }

    let indexBackground = this.props.mode === false ? "main-video-index" : "dark-main-video-index" 

    if (!this.props.videos) return null;

    let allTags = [];
    this.props.videos.map((video, i) => {
      video.tags.map((tag, j) =>
        allTags.includes(tag) ? "" : allTags.push(tag)
      );
    });

    let defaultTag = !this.state.filters.length ? 'tag-active' : 'tag';

    let videos;
    if (!this.state.filters.length) {
        videos = this.props.videos;
    } else {
        videos = this.props.videos.filter(video => video.tags.includes(this.state.filters[0]))
    }

    return (
      <>
        <Sidebar mode={this.props.mode}/>
         <div
          className='placeholder'
        ></div>
        <div
          className={scrollDisplay}
          onMouseEnter={this.show}
          onMouseLeave={this.hide}
        >
          <div className={defaultTag} onClick={() => this.resetFilters(event)}>
            All recommendations
          </div>
          {allTags.map((tag, idx) => (
            <div className={this.tagType(tag)} onClick={() => this.addFilter(tag)}>
              {tag}
            </div>
          ))}
        </div>
        <ul className={indexBackground}>
          {videos.map((video, idx) => (
            <Video
              key={video.id}
              video={video}
              idx={idx}
              color={video.userColor}
              mode={this.props.mode}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Home;