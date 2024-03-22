import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    DeleteCommentStart: (state) => {
      state.loading = true;
    },
    DeleteCommentSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    DeleteCommentError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateCommentStart: (state) => {
      state.loading = true;
    },
    updateCommentSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateCommentFailure: (state, action) => {
      state.error = action.payload;
      state.loading = null;
    },
  },
});

export const {
  DeleteCommentStart,
  DeleteCommentSuccess,
  DeleteCommentError,
  updateCommentStart,
  updateCommentSuccess,
  updateCommentFailure,
} = commentSlice.actions;

export default commentSlice.reducer;
