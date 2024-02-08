import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsConfig } from "../../utils/apis";

const initialState = {
  productsConfigs: {},
  loading: false,
  error: null,
};

export const fetchProductsConfig = createAsyncThunk(
  "productsConfig/fetchProductsConfig",
  async () => {
    try {
      const response = await getProductsConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const productsConfigSlice = createSlice({
  name: "productsConfig",
  initialState,
  reducers: {
    setProductsConfig: (state, action) => {
      state.productsConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.productsConfigs = action.payload;
      })
      .addCase(fetchProductsConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProductsConfig } = productsConfigSlice.actions;
export default productsConfigSlice.reducer;
