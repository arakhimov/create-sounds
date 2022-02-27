import { createAction, createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";
import { isOutDate } from "../utils/isOutDate";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    entities: [],
    isloading: true,
    errors: null,
    lastFetch: null
  },
  reducers: {
    commentsRequested: (state) => {
      state.isloading = true;
    },
    commentsRecieved: (state, action) => {
      state.isloading = false;
      state.entities = action.payload;
      state.lastFetch = Date.now();
    },
    commentsRequestFailed: (state, action) => {
      state.isloading = false;
      state.errors = action.payload;
    },
    commentCreated: (state, action) => {
      // TODO commentId
      state.entities.push(action.payload);
    },
    commentRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (comment) => comment._id !== action.payload
      );
    }
  }
});

const commentCreateRequested = createAction("comments/commentCreateRequested");
const commentCreateRequestFailed = createAction(
  "comments/commentCreateRequestFailed"
);
const commentRemoveRequested = createAction("comments/commentRemoveRequested");
const commentRemoveRequestFailed = createAction(
  "comments/commentRemoveRequestFailed"
);

const { reducer: commentsReducer, actions } = commentSlice;
const {
  commentsRequested,
  commentsRecieved,
  commentsRequestFailed,
  commentCreated,
  commentRemoved
} = actions;

export const loadCommentsList = (pageid) => async (dispatch, getState) => {
  const { lastFetch } = getState().products;
  if (isOutDate(lastFetch)) {
    dispatch(commentsRequested());
    try {
      const { content } = await commentService.getCommentList(pageid);
      dispatch(commentsRecieved(content));
    } catch (error) {
      dispatch(commentsRequestFailed(error.message));
    }
  }
};

export const createComment = (data) => async (dispatch) => {
  dispatch(commentCreateRequested());
  try {
    const { content } = await commentService.createComment(data);
    dispatch(commentCreated(content));
  } catch (error) {
    dispatch(commentCreateRequestFailed());
  }
};

export const removeComment = (commentId) => async (dispatch) => {
  dispatch(commentRemoveRequested());
  try {
    const { content } = await commentService.removeComment(commentId);
    if (content === null) {
      dispatch(commentRemoved(commentId));
    }
  } catch (error) {
    dispatch(commentRemoveRequestFailed());
  }
};

export const getComments = () => (state) => state.comments.entities;

export default commentsReducer;
