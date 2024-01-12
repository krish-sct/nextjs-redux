import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getArticlesConfig } from "../../utils/apis";

const initialState = {
  articlesConfigs: {},
  loading: false,
  error: null,
};

export const fetchArticlesConfig = createAsyncThunk(
  "articlesConfig/fetchArticlesConfig",
  async () => {
    try {
      const response = await getArticlesConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const articlesConfigSlice = createSlice({
  name: "articlesConfig",
  initialState,
  reducers: {
    setArticlesConfig: (state, action) => {
      state.articlesConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticlesConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.articlesConfigs = action.payload;
      })
      .addCase(fetchArticlesConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setArticlesConfig } = articlesConfigSlice.actions;
export default articlesConfigSlice.reducer;
