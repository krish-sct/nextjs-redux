import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFaqs } from "../../utils/apis";

const initialState = {
  faqs: {
    totalPages: 0,
    currentPage: 0,
    faqs: [],
    faqDetails: {},
  },
  loading: false,
  error: null,
};

export const fetchFaq = createAsyncThunk("faqs/fetchFaq", async (data) => {
  let page = data?.page;
  let limit = data?.limit;
  try {
    const response = await getFaqs(page, limit);
    return response;
  } catch (error) {
    console.error("Error in fetching:", error);
  }
});

export const fetchFaqById = createAsyncThunk(
  "faqs/fetchFaqById",
  async (faqsId) => {
    try {
      const response = await getFaqs(faqsId);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
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
      })
      .addCase(fetchFaqById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaqById.fulfilled, (state, action) => {
        state.loading = false;
        state.faqs.faqDetails = action.payload;
      })
      .addCase(fetchFaqById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFaqs } = faqSlice.actions;
export default faqSlice.reducer;
