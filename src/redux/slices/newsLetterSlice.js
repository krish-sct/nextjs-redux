import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsLetters } from "../../utils/apis";

const initialState = {
  newsLetter: {
    totalPages: 0,
    currentPage: 0,
    newsLetter: [],
  },
  loading: false,
  error: null,
};

export const fetchNewsLetter = createAsyncThunk(
  "newsLetter/fetchNewsLetter",
  async (page, limit) => {
    const response = await getNewsLetters(page, limit);
    console.log({ response });
    return response.data;
  }
);

export const newsLetterSlice = createSlice({
  name: "newsLetter",
  initialState,
  reducers: {
    setNewsLetter: (state, action) => {
      state.newsLetter = { ...action.payload };
    },
    extraReducers: {
      [fetchNewsLetter.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchNewsLetter.fulfilled]: (state, action) => {
        state.loading = false;
        state.newsLetter = action.payload;
      },
      [fetchNewsLetter.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    },
  },
});

export const { setNewsLetter } = newsLetterSlice.actions;
export default newsLetterSlice.reducer;
