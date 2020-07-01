import { combineReducers }  from 'redux'
import usersReducer from './users_reducer'
import videosReducer from './video_reducer';
import commentsReducer from './comment_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    comments: commentsReducer
})

export default entitiesReducer;