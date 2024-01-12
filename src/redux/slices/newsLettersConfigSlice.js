import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsLettersConfig } from "../../utils/apis";

const initialState = {
  newsLettersConfigs: {},
  loading: false,
  error: null,
};

export const fetchNewsLettersConfig = createAsyncThunk(
  "newsLettersConfig/fetchNewsLettersConfig",
  async () => {
    try {
      const response = await getNewsLettersConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const newsLettersConfigSlice = createSlice({
  name: "newsLettersConfig",
  initialState,
  reducers: {
    setNewsLettersConfig: (state, action) => {
      state.newsLettersConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsLettersConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsLettersConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.newsLettersConfigs = action.payload;
      })
      .addCase(fetchNewsLettersConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setNewsLettersConfig } = newsLettersConfigSlice.actions;
export default newsLettersConfigSlice.reducer;
