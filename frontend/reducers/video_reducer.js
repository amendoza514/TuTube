import { RECEIVE_VIDEO, RECEIVE_VIDEOS} from '../actions/video_actions'

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_VIDEO:
            return Object.assign({}, state, {[action.video.id]: action.video });
            case RECEIVE_VIDEOS:
                // debugger
            return action.videos;

        // case RECEIVE_ALL_POKEMON:
        //     return Object.assign({}, state, action.pokemon);

        // case RECEIVE_TODOS:
        //     action.todos.forEach(todo => {
        //         nextState[todo.id] = todo;
        //     });
        //     return nextState;

        default: 
            return state;
    }
}

export default videosReducer

//QUESTION: Still not totally sure what I'm doing here. 