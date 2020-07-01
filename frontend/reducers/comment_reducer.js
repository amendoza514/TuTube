import { RECEIVE_COMMENTS } from '../actions/comment_actions'
import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions'

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments
        case RECEIVE_VIDEO:
            // debugger
            // let video_comments = []
            // Object.values(action.video.comments).forEach(comment => comment.video_id === action.video.id ? video_comments << comment : '')
            // return Object.assign({}, state, video_comments)
            return action.video.comments ? action.video.comments : []
        default:
            return state;
    }
}

export default commentsReducer;