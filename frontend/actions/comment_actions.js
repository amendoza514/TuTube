import * as CommentAPIUtil from '../util/comment_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

export const fetchComments = () => dispatch => CommentAPIUtil.fetchComments()
    .then(comments => dispatch(receiveComments(comments)));
