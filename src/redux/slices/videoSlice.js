import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVideosUrl } from "../../utils/apis";

const initialState = {
  videos: {
    totalPages: 0,
    currentPage: 0,
    videos: [],
  },
  loading: false,
  error: null,
};

export const fetchVideoUrl = createAsyncThunk(
  "videos/fetchVideoUrl",
  async (data) => {
    let page = data?.page;
    let limit = data?.limit;
    try {
      const response = await getVideosUrl(page, limit);
      return response;
    } catch (error) {
      console.error("Error", error);
    }
  }
);

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.videos = {
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoUrl.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideoUrl.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideoUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setVideos } = videoSlice.actions;
export default videoSlice.reducer;
