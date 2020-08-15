import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';
import  { RECEIVE_COMMENT_LIKE, REMOVE_COMMENT_LIKE } from '../actions/like_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT: 
        // debugger
            return Object.assign({}, state, { [action.comment.id]: action.comment }) 
        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            delete newState[action.commentId]
            return newState
        case RECEIVE_VIDEO:
            return action.video.comments ? action.video.comments : [];

        case RECEIVE_COMMENT_LIKE:
            if (!action.payload.comment) return state;
            return Object.assign({}, state, action.payload.comment);
        case REMOVE_COMMENT_LIKE:
            if (!action.payload.comment) return state;
            return Object.assign({}, state, action.payload.comment);

        default:
            return state;
    }
}

export default commentsReducer;