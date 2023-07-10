/* eslint no-param-reassign: "error" */
import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    userId: null,
    postTitle: null,
    postBody: null,
    postId: null,
  },
  reducers: {
    getUserId: (state, action) => {
      state.userId = action.payload;
    },
    getPostTitle: (state, action) => {
      state.postTitle = action.payload;
    },
    getPostBody: (state, action) => {
      state.postBody = action.payload;
    },
    getPostId: (state, action) => {
      state.postId = action.payload;
    },
  },
});

export const { getUserId, getPostTitle, getPostBody, getPostId } =
  postSlice.actions;

export default postSlice.reducer;
