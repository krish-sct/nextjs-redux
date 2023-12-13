import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTestimonials, addTestimonial } from "../../utils/apis";
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
  async (page, limit) => {
    const response = await getTestimonials(page, limit);
    return response.data;
  }
);
export const addTestimonial = createAsyncThunk(
  "testimonial/addTestimonial",
  async (data) => {
    const response = await addTestimonial(data);
    return response.data;
  }
);
export const deleteTestimonial = createAsyncThunk(
  "testimonial/deleteTestimonial",
  async (data) => {
    const response = await deleteTestimonial(data);
    return response.data;
  }
);
export const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    setTestimonials: (state, action) => {
      state.testimonials = { ...action.payload };
    },
    extraReducers: {
      [fetchTestimonial.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchTestimonial.fulfilled]: (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      },
      [fetchTestimonial.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    },
  },
});
export const { setTestimonials } = testimonialSlice.actions;
export default testimonialSlice.reducer;
