import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPodcasts } from "../../utils/apis";

const initialState = {
  podcasts: {
    totalPages: 0,
    currentPage: 0,
    podcasts: [],
  },
  loading: false,
  error: null,
};

export const fetchPodcast = createAsyncThunk(
  "podcasts/fetchPodcast",
  async (page, limit) => {
    const response = await getPodcasts(page, limit);
    console.log({ response });
    return response.data;
  }
);

export const podcastsSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setPodcasts: (state, action) => {
      state.podcasts = { ...action.payload };
    },
    extraReducers: {
      [fetchPodcast.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchPodcast.fulfilled]: (state, action) => {
        state.loading = false;
        state.podcasts = action.payload;
      },
      [fetchPodcast.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    },
  },
});

export const { setPodcasts } = podcastsSlice.actions;
export default podcastsSlice.reducer;
