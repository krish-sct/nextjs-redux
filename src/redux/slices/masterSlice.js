import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMasterForms } from "../../utils/apis";

const initialState = {
  masterForms: {
    totalPages: 0,
    currentPage: 0,
    masterForms: [],
  },
  loading: false,
  error: null,
};

export const fetchMasterForm = createAsyncThunk(
  "masterForm/fetchMasterForm",
  async (data) => {
    let page = data?.page;
    let limit = data?.limit;
    try {
      const response = await getMasterForms(page, limit);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
);

export const masterSlice = createSlice({
  name: "masterForm",
  initialState,
  reducers: {
    setMasterForms: (state, action) => {
      state.masterForms = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMasterForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMasterForm.fulfilled, (state, action) => {
        state.loading = false;
        state.masterForms = action.payload;
      })
      .addCase(fetchMasterForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setMasterForms } = masterSlice.actions;
export default masterSlice.reducer;
