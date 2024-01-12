import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPressReleasesConfig } from "../../utils/apis";

const initialState = {
  pressReleasesConfigs: {},
  loading: false,
  error: null,
};

export const fetchPressReleasesConfig = createAsyncThunk(
  "pressReleasesConfig/fetchPressReleasesConfig",
  async () => {
    try {
      const response = await getPressReleasesConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const pressReleasesConfigSlice = createSlice({
  name: "pressReleasesConfig",
  initialState,
  reducers: {
    setPressReleasesConfig: (state, action) => {
      state.pressReleasesConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPressReleasesConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPressReleasesConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.pressReleasesConfigs = action.payload;
      })
      .addCase(fetchPressReleasesConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPressReleasesConfig } = pressReleasesConfigSlice.actions;
export default pressReleasesConfigSlice.reducer;
