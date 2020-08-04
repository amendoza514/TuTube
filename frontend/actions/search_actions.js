export const SEARCH = "SEARCH";

export const searchVideos = (search) => {
  return {
    type: SEARCH,
    search,
  };
};