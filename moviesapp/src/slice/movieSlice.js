import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState: intialState,
  reducers: {
    // set movies
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
