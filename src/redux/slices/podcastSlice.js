import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPodcastById, getPodcasts } from "../../utils/apis";

const initialState = {
  podcasts: {
    totalPages: 0,
    currentPage: 0,
    podcasts: [],
    podcastDetails: {},
  },
  loading: false,
  error: null,
};

export const fetchPodcast = createAsyncThunk(
  "podcasts/fetchPodcast",
  async (data) => {
    let page = data?.page;
    let limit = data?.limit;
    try {
      const response = await getPodcasts(page, limit);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
);

export const fetchPodcastById = createAsyncThunk(
  "podcasts/fetchPodcastById",
  async (podcastsId) => {
    try {
      const response = await getPodcastById(podcastsId);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
);

export const podcastsSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setPodcasts: (state, action) => {
      state.podcasts = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPodcast.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPodcast.fulfilled, (state, action) => {
        state.loading = false;
        state.podcasts = action.payload;
      })
      .addCase(fetchPodcast.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPodcastById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPodcastById.fulfilled, (state, action) => {
        state.loading = false;
        state.podcasts.podcastDetails = action.payload;
      })
      .addCase(fetchPodcastById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPodcasts } = podcastsSlice.actions;
export default podcastsSlice.reducer;
