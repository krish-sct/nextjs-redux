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
  async (page, limit) => {
    try {
      const response = await getTestimonials(page, limit);
      console.log({ response });
      return response.data;
    } catch (error) {
      console.log(error);
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
    extraReducers: {
      [fetchTestimonial.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchTestimonial.fulfilled]: (state, action) => {
        //console.log("payload test:",action.payload);
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
