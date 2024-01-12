import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFaqsConfig } from "../../utils/apis";

const initialState = {
  faqsConfigs: {},
  loading: false,
  error: null,
};

export const fetchFaqsConfig = createAsyncThunk(
  "faqsConfig/fetchFaqsConfig",
  async () => {
    try {
      const response = await getFaqsConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const faqsConfigSlice = createSlice({
  name: "faqsConfig",
  initialState,
  reducers: {
    setFaqsConfig: (state, action) => {
      state.faqsConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqsConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaqsConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.faqsConfigs = action.payload;
      })
      .addCase(fetchFaqsConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFaqsConfig } = faqsConfigSlice.actions;
export default faqsConfigSlice.reducer;
