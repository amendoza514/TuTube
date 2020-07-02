export const fetchComments = () => (
    $.ajax({
        url: `api/comments/`,
        method: 'GET',
    })
)

export const createComment = (comment) => (
    $.ajax({
        url: `api/comments/`,
        method: 'POST',
        data: { comment },
    })
)

//reading had it as { comment }, in case this no goo

export const updateComment = (comment) => (
    $.ajax({
        url: `api/comments/${comment.id}`,
        method: 'PATCH',
        data: { comment },
    })
)

export const deleteComment = (commentId) => (
    $.ajax({
        url: `api/comments/${commentId}`,
        method: 'DELETE',
    })
)