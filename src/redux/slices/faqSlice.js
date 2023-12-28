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
    return response;
  }
);

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setFaqs: (state, action) => {
      state.faqs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaq.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaq.fulfilled, (state, action) => {
        state.loading = false;
        state.faqs = action.payload;
      })
      .addCase(fetchFaq.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFaqs } = faqSlice.actions;
export default faqSlice.reducer;
