import httpService from "./http.service";

const commentEndPoint = "comment/";

const commentService = {
  getCommentList: async (pageId) => {
    const { data } = await httpService.get(commentEndPoint, {
      params: {
        equalsTo: "pageId",
        sortBy: `"${pageId}"`
      }
    });

    return data;
  },
  createComment: async (payload) => {
    const { data } = await httpService.put(commentEndPoint + payload._id, {
      ...payload
    });

    return data;
  },
  removeComment: async (commentId) => {
    const { data } = await httpService.delete(commentEndPoint + commentId);
    return data;
  }
};

export default commentService;
