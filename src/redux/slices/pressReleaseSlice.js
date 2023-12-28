import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPressReleases } from "../../utils/apis";

const initialState = {
  pressReleases: {
    totalPages: 0,
    currentPage: 0,
    pressReleases: [],
  },
  loading: false,
  error: null,
};

export const fetchPressRelease = createAsyncThunk(
  "pressReleases/fetchPressRelease",
  async (page, limit) => {
    const response = await getPressReleases(page, limit);
    return response;
  }
);

export const pressReleaseSlice = createSlice({
  name: "pressRelease",
  initialState,
  reducers: {
    setPressReleases: (state, action) => {
      state.pressReleases = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPressRelease.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPressRelease.fulfilled, (state, action) => {
        state.loading = false;
        state.pressReleases = action.payload;
      })
      .addCase(fetchPressRelease.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPressReleases } = pressReleaseSlice.actions;
export default pressReleaseSlice.reducer;
