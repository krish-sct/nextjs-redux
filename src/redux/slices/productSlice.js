import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductById, getProducts } from "../../utils/apis";

const initialState = {
  products: {
    totalPages: 0,
    currentPage: 0,
    products: [],
    productDetails: {},
  },
  loading: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (data) => {
    let page = data?.page;
    let limit = data?.limit;
    try {
      const response = await getProducts(page, limit);
      return response;
    } catch (error) {
      console.error("Error", error);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    try {
      const response = await getProductById(productId);
      return response;
    } catch (error) {
      console.error("Error", error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.products.productDetails = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
