import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPressReleases, getPressReleasesById } from "../../utils/apis";

const initialState = {
  pressReleases: {
    totalPages: 0,
    currentPage: 0,
    pressReleases: [],
    pressReleaseDetails: {},
  },
  loading: false,
  error: null,
};

export const fetchPressRelease = createAsyncThunk(
  "pressReleases/fetchPressRelease",
  async (data) => {
    let page = data?.page;
    let limit = data?.limit;
    try {
      const response = await getPressReleases(page, limit);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
);

export const fetchPressReleaseById = createAsyncThunk(
  "pressReleases/fetchPressReleaseById",
  async (pressReleasesId) => {
    try {
      const response = await getPressReleasesById(pressReleasesId);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
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
      })
      .addCase(fetchPressReleaseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPressReleaseById.fulfilled, (state, action) => {
        state.loading = false;
        state.pressReleases.pressReleaseDetails = action.payload;
      })
      .addCase(fetchPressReleaseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPressReleases } = pressReleaseSlice.actions;
export default pressReleaseSlice.reducer;
