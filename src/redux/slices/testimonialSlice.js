import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTestimonials } from "../../utils/apis";
const initialState = {
  testimonials: {
    totalPages: 0,
    currentPage: 0,
    testimonials: [],
  },
  loading: false,
  error: null,
};
export const fetchTestimonial = createAsyncThunk(
  "testimonial/fetchTestimonial",
  async (data) => {
    let page = data?.page;
    let limit = data?.limit;
    try {
      const response = await getTestimonials(page, limit);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
);

export const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    setTestimonials: (state, action) => {
      state.testimonials = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonial.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setTestimonials } = testimonialSlice.actions;
export default testimonialSlice.reducer;
