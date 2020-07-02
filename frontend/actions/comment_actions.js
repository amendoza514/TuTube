import * as CommentAPIUtil from '../util/comment_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments,
});

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment,
});


export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId,
})


export const fetchComments = () => dispatch => CommentAPIUtil.fetchComments()
    .then(comments => dispatch(receiveComments(comments)));

export const createComment = comment => dispatch => CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)));

export const updateComment = comment => dispatch => CommentAPIUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)));


//QUESTION I didn't need a create comment until this update method? is that correct? 

export const deleteComment = commentId => dispatch => CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)));

