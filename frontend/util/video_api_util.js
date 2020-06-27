export const fetchVideo = id => (
    $.ajax({
        url: `api/videos/${id}`,
        method: 'GET',
    })
)

// am I passing down a video where I grab video.id? Or like this?

export const fetchVideos = () => (
    $.ajax({
        url: `api/videos/`,
        method: 'GET',
    })
)

