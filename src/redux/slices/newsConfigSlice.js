import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsConfig } from "../../utils/apis";

const initialState = {
  newsConfigs: {},
  loading: false,
  error: null,
};

export const fetchNewsConfig = createAsyncThunk(
  "newsConfig/fetchNewsConfig",
  async () => {
    try {
      const response = await getNewsConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const newsConfigSlice = createSlice({
  name: "newsConfig",
  initialState,
  reducers: {
    setNewsConfig: (state, action) => {
      state.newsConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.newsConfigs = action.payload;
      })
      .addCase(fetchNewsConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setNewsConfig } = newsConfigSlice.actions;
export default newsConfigSlice.reducer;
