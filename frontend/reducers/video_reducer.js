import { RECEIVE_VIDEO, RECEIVE_VIDEOS} from '../actions/video_actions'
import  { RECEIVE_VIDEO_LIKE, REMOVE_VIDEO_LIKE } from '../actions/like_actions';


const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_VIDEO:
            // return Object.assign({}, state, {[action.video.id]: action.video });
            let newState = Object.assign({}, state, {[action.video.video.id]: action.video.video})
            action.video.previews.forEach(video => {
                newState[video.id] = video
            });
            return newState;

        case RECEIVE_VIDEOS:
            return action.videos;

        case RECEIVE_VIDEO_LIKE:
            if (!action.video.video) return state;
            return Object.assign({}, state, {[action.video.video.id]: action.video.video});
            
        case REMOVE_VIDEO_LIKE:
             if (!action.video.video) return state;
            return Object.assign({}, state, {[action.video.video.id]: action.video.video});
            // return Object.assign({}, state, action.payload.video);

        default: 
            return state;
    }
}

export default videosReducer

