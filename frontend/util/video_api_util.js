export const fetchVideo = id => (
    $.ajax({
        url: `api/videos/${id}`,
        method: 'GET',
    })
)

export const fetchVideos = () => (
    $.ajax({
        url: `api/videos/`,
        method: 'GET',
    })
)

export const searchVideos = search =>
  $.ajax({
    url: `api/search/${search}`,
    method: "GET",
  });



