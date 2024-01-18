import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDynamicTemplatePreview } from "../../utils/apis";

const initialState = {
  templateDatas: {
    templateDatas: [],
  },
  loading: false,
  error: null,
};

export const fetchDynamicTemplatePreview = createAsyncThunk(
  "templateDatas/fetchDynamicTemplatePreview",
  async (data) => {
    try {
      const response = await getDynamicTemplatePreview(data);
      return response;
    } catch (error) {
      console.error("Error", error);
    }
  }
);

export const dynamicTemplatePreviewSlice = createSlice({
  name: "templateData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDynamicTemplatePreview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDynamicTemplatePreview.fulfilled, (state, action) => {
        state.loading = false;
        state.templateDatas = action.payload;
      })
      .addCase(fetchDynamicTemplatePreview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dynamicTemplatePreviewSlice.reducer;
