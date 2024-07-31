import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    editPost: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePostImage: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post.image = null;
      }
    },
  },
});

export const { addPost, deletePost, editPost, deletePostImage } =
  postSlice.actions;

export default postSlice.reducer;
