import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "../../utils/apis";

const initialState = {
  news: {
    totalPages: 0,
    currentPage: 0,
    news: [],
  },
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (page, limit) => {
    const response = await getNews(page, limit);
    console.log({ response });
    return response.data;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = { ...action.payload };
    },
    extraReducers: {
      [fetchNews.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchNews.fulfilled]: (state, action) => {
        state.loading = false;
        state.news = action.payload;
      },
      [fetchNews.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
