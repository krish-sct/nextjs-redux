import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTestimonialsConfig } from "../../utils/apis";

const initialState = {
  testimonialsConfigs: {},
  loading: false,
  error: null,
};

export const fetchTestimonialsConfig = createAsyncThunk(
  "testimonialsConfig/fetchTestimonialsConfig",
  async () => {
    try {
      const response = await getTestimonialsConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const testimonialsConfigSlice = createSlice({
  name: "testimonialsConfig",
  initialState,
  reducers: {
    setTestimonialsConfig: (state, action) => {
      state.testimonialsConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonialsConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonialsConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonialsConfigs = action.payload;
      })
      .addCase(fetchTestimonialsConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setTestimonialsConfig } = testimonialsConfigSlice.actions;
export default testimonialsConfigSlice.reducer;
