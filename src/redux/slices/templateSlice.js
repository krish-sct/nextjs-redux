import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTemplates } from "../../utils/apis";

const initialState = {
  templates: {
    totalPages: 0,
    currentPage: 0,
    templates: [],
  },
  loading: false,
  error: null,
};

export const fetchTemplate = createAsyncThunk(
  "template/fetchTemplate",
  async (page, limit) => {
    const response = await getTemplates(page, limit);
    return response;
  }
);

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplates: (state, action) => {
      state.templates = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTemplate.fulfilled, (state, action) => {
        state.loading = false;
        state.templates = action.payload;
      })
      .addCase(fetchTemplate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setTemplates } = templateSlice.actions;
export default templateSlice.reducer;
