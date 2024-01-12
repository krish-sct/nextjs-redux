import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVideosConfig } from "../../utils/apis";

const initialState = {
  videosConfigs: {},
  loading: false,
  error: null,
};

export const fetchVideosConfig = createAsyncThunk(
  "videosConfig/fetchVideosConfig",
  async () => {
    try {
      const response = await getVideosConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const videosConfigSlice = createSlice({
  name: "videosConfig",
  initialState,
  reducers: {
    setVideosConfig: (state, action) => {
      state.videosConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideosConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.videosConfigs = action.payload;
      })
      .addCase(fetchVideosConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setVideosConfig } = videosConfigSlice.actions;
export default videosConfigSlice.reducer;
