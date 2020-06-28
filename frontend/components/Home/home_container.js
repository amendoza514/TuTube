//Video Index

import Home from './home'
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import { fetchVideo, fetchVideos } from '../../actions/video_actions'

const mapStateToProps = state => ({
    videos: Object.values(state.entities.videos)

});

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    closeModal: modal => dispatch(closeModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
