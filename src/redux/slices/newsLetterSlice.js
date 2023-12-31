import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsLetterById, getNewsLetters } from "../../utils/apis";

const initialState = {
  newsLetter: {
    totalPages: 0,
    currentPage: 0,
    newsLetter: [],
    newsLetterDetails: {},
  },
  loading: false,
  error: null,
};

export const fetchNewsLetter = createAsyncThunk(
  "newsLetter/fetchNewsLetter",
  async (data) => {
    let page = data?.page;
    let limit = data?.limit;
    try {
      const response = await getNewsLetters(page, limit);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
);

export const fetchNewsLetterById = createAsyncThunk(
  "newsLetter/fetchNewsLetterById",
  async (newsLetterId) => {
    try {
      const response = await getNewsLetterById(newsLetterId);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
);

export const newsLetterSlice = createSlice({
  name: "newsLetter",
  initialState,
  reducers: {
    setNewsLetter: (state, action) => {
      state.newsLetter = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsLetter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsLetter.fulfilled, (state, action) => {
        state.loading = false;
        state.newsLetter = action.payload;
      })
      .addCase(fetchNewsLetter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchNewsLetterById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsLetterById.fulfilled, (state, action) => {
        state.loading = false;
        state.newsLetter.newsLetterDetails = action.payload;
      })
      .addCase(fetchNewsLetterById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setNewsLetter } = newsLetterSlice.actions;
export default newsLetterSlice.reducer;
