import * as LikeAPIUtil from "../util/like_util";
export const RECEIVE_COMMENT_LIKE = "RECEIVE_COMMENT_LIKE";
export const REMOVE_COMMENT_LIKE = "REMOVE_COMMENT_LIKE";
export const RECEIVE_VIDEO_LIKE = "RECEIVE_VIDEO_LIKE";
export const REMOVE_VIDEO_LIKE = "REMOVE_VIDEO_LIKE";

export const receiveCommentLike = (comment) => ({
  type: RECEIVE_COMMENT_LIKE,
  comment,
});

export const removeCommentLike = (comment) => ({
  type: REMOVE_COMMENT_LIKE,
  comment,
});

export const receiveVideoLike = (video) => ({
  type: RECEIVE_VIDEO_LIKE,
  video,
});

export const removeVideoLike = (video) => ({
  type: REMOVE_VIDEO_LIKE,
  video,
});

//video likes
export const likeVideo = (video) => (dispatch) =>
LikeAPIUtil.likeVideo(video).then((video) =>
dispatch(receiveVideoLike(video))
);

export const dislikeVideo = (video) => (dispatch) =>
LikeAPIUtil.dislikeVideo(video).then((video) =>
dispatch(removeVideoLike(video))
);

export const destroyVideoLike = (videoId, likeId) => (dispatch) =>
LikeAPIUtil.removeVideoLike(videoId, likeId).then((videoId) =>
dispatch(removeVideoLike(videoId))
// was originally .then(() =>
// I wasn't returning anything to refresh ? WHy would I ever want to do that?
);

//comment likes
export const likeComment = (comment) => (dispatch) =>
  LikeAPIUtil.likeComment(comment).then((comment) =>
    dispatch(receiveCommentLike(comment))
  );

export const dislikeComment = (comment) => (dispatch) =>
  LikeAPIUtil.dislikeComment(comment).then((comment) =>
    dispatch(removeCommentLike(comment))
  );

export const destroyCommentLike = (commentId, likeId) => (dispatch) =>
    LikeAPIUtil.removeCommentLike(commentId, likeId).then((commentId) =>
      dispatch(removeCommentLike(commentId))
      // was originally .then(() =>
// I wasn't returning anything to refresh ? WHy would I ever want to do that?
);