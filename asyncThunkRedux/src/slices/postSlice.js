import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadPost.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.posts = action.payload;
      })
      .addCase(loadPost.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const loadPost = createAsyncThunk("posts/loadpost", async () => {
  try {
    const data = await axios.get("https://dummyjson.com/posts");
    return data;
  } catch (err) {
    return err;
  }
});

export default postSlice.reducer;
