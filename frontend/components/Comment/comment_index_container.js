import CommentIndex from './comment_index'
import { connect } from 'react-redux';
// import { fetchVideo } from '../../actions/video_actions'

const mapStateToProps = (state, ownProps) => {
    let user = state.entities.users[state.session.id]
    return {
    comments: Object.values(state.entities.comments),
    currentUser: user? user : []
    //   previewIds: vid ? (vid.preview_ids ? vid.preview_ids : []) : []
 }
};

// const mapDispatchToProps = dispatch => ({
//     fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
// });

export default connect(mapStateToProps, null)(CommentIndex)
