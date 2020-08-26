import CommentIndex from './comment_index'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { createComment, updateComment, deleteComment } from '../../actions/comment_actions'
import { likeComment, dislikeComment, destroyCommentLike, fetchLikes} from '../../actions/like_actions'

const mapStateToProps = (state, ownProps) => ({
    comments: Object.values(state.entities.comments),
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    likeComment: (comment) => dispatch(likeComment(comment)),
    dislikeComment: (comment) => dispatch(dislikeComment(comment)),
    destroyCommentLike: (commentId, likeId) => dispatch(destroyCommentLike(commentId, likeId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex))
