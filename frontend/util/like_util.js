//comment
export const likeComment = comment =>
  $.ajax({
    url: `api/comments/${comment.id}/likes`,
    method: "POST",
    data: { comment }
    // data: { id: comment_id, like: true, user_id:}
  });

export const dislikeComment = (comment) =>
  $.ajax({
    url: `api/comments/${comment.id}/likes`,
    method: "POST",
    data: { comment },
    // data: { id: comment_id, like: true, user_id:}
  });

  export const removeCommentLike = (commentId, likeId) =>
    $.ajax({
      url: `api/comments/${commentId}/likes/${likeId}`,
      method: "DELETE",
      data: {comment_id: commentId, liked_id: likedId, type: "Comment"}
    });


    
//video
export const likeVideo = (video) =>
  $.ajax({
    url: `api/videos/${video.id}/likes`,
    method: "POST",
    data: { id: video.id, like: true },
    // data: { id: comment_id, like: true, user_id:}
  });

export const dislikeVideo = (video) =>
  $.ajax({
    url: `api/videos/${video.id}/likes`,
    method: "POST",
    data: { id: video.id, like: false },
    // data: { id: comment_id, like: true, user_id:}
  });

export const removeVideoLike = (videoId, likeId) =>
    $.ajax({
      url: `api/videos/${videoId}/likes/${likeId}`,
      method: "DELETE",
      data: { id: likeId, video_id: videoId, type: "Video" }
    });
