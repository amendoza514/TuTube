import { RECEIVE_VIDEO, RECEIVE_VIDEOS} from '../actions/video_actions'

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_VIDEO:
            // return Object.assign({}, state, {[action.video.id]: action.video });
            let newState = Object.assign({}, state, {[action.video.video.id]: action.video.video})
            //change to payload later
            action.video.previews.forEach(video => {
                newState[video.id] = video
            });
            return newState;
        case RECEIVE_VIDEOS:
                // debugger
            return action.videos;

        default: 
            return state;
    }
}

export default videosReducer

//QUESTION: Still not totally sure what I'm doing here. 