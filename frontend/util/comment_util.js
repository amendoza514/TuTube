// export const fetchVideo = id => (
//     $.ajax({
//         url: `api/videos/${id}`,
//         method: 'GET',
//     })
// )
export const fetchComments = () => (
    $.ajax({
        url: `api/comments/`,
        method: 'GET',
    })
)

