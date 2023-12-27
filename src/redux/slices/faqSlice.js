import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFaqs } from "../../utils/apis";

const initialState = {
  faqs: {
    totalPages: 0,
    currentPage: 0,
    faqs: [],
  },
  loading: false,
  error: null,
};

export const fetchFaq = createAsyncThunk(
  "faqs/fetchFaq",
  async (page, limit) => {
    const response = await getFaqs(page, limit);
    console.log({ response });
    return response.data;
  }
);

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setFaqs: (state, action) => {
      state.faqs = { ...action.payload };
    },
    extraReducers: {
      [fetchFaq.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchFaq.fulfilled]: (state, action) => {
        state.loading = false;
        state.faqs = action.payload;
      },
      [fetchFaq.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    },
  },
});

export const { setFaqs } = faqSlice.actions;
export default faqSlice.reducer;
