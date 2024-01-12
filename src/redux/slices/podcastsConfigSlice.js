import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPodcastsConfig } from "../../utils/apis";

const initialState = {
  podcastsConfigs: {},
  loading: false,
  error: null,
};

export const fetchPodcastsConfig = createAsyncThunk(
  "podcastsConfig/fetchPodcastsConfig",
  async () => {
    try {
      const response = await getPodcastsConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const podcastsConfigSlice = createSlice({
  name: "podcastsConfig",
  initialState,
  reducers: {
    setPodcastsConfig: (state, action) => {
      state.podcastsConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPodcastsConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPodcastsConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.podcastsConfigs = action.payload;
      })
      .addCase(fetchPodcastsConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPodcastsConfig } = podcastsConfigSlice.actions;
export default podcastsConfigSlice.reducer;
