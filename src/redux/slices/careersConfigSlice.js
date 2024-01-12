import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCareersConfig } from "../../utils/apis";

const initialState = {
  careersConfigs: {},
  loading: false,
  error: null,
};

export const fetchCareersConfig = createAsyncThunk(
  "careersConfig/fetchCareersConfig",
  async () => {
    try {
      const response = await getCareersConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const careersConfigSlice = createSlice({
  name: "careersConfig",
  initialState,
  reducers: {
    setCareersConfig: (state, action) => {
      state.careersConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareersConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCareersConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.careersConfigs = action.payload;
      })
      .addCase(fetchCareersConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCareersConfig } = careersConfigSlice.actions;
export default careersConfigSlice.reducer;
