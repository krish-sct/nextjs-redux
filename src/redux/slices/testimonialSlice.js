const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  testimonials: {
    totalPages: 0,
    currentPage: 0,
    testimonials: [],
  },
};

export const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    // addTestimonial: (state, action) => {
    //   state.testimonials = [...state.testimonials, action.payload];
    // },
    setTestimonials: (state, action) => {
      state.testimonials = { ...action.payload };
    },
  },
});
export const { setTestimonials } = testimonialSlice.actions;
export default testimonialSlice.reducer;
