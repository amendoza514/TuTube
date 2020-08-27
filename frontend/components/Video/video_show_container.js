//Video Show
import VideoShow from './video_show';
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import { likeVideo, dislikeVideo, destroyVideoLike} from '../../actions/like_actions'

const mapStateToProps = (state, ownProps) => {
    let vid = state.entities.videos[ownProps.match.params.videoId]
    return { 
      video: vid,
      currentUser: state.entities.users[state.session.id],
      comments: Object.values(state.entities.comments),
      mode: state.ui.mode,
      allVideos: state.entities.videos,
      previewIds: vid ? (vid.preview_ids ? vid.preview_ids : []) : []
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  likeVideo: (video) => dispatch(likeVideo(video)),
  dislikeVideo: (video) => dispatch(dislikeVideo(video)),
  destroyVideoLike: (videoId, likeId) => dispatch(destroyVideoLike(videoId, likeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow)
