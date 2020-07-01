//Video Show
import VideoShow from './video_show'
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions'

const mapStateToProps = (state, ownProps) => {
    let vid = state.entities.videos[ownProps.match.params.videoId]
    return { 
      video: vid,
      comments: Object.values(state.entities.comments),
      allVideos: state.entities.videos,
      previewIds: vid ? (vid.preview_ids ? vid.preview_ids : []) : []
  }
};

const mapDispatchToProps = dispatch => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow)
