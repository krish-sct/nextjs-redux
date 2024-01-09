import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews, getNewsById } from "../../utils/apis";
import NewsDetails from "../../app/news/[newsId]/page";

const initialState = {
  news: {
    totalPages: 0,
    currentPage: 0,
    news: [],
    newsDetails: {},
  },
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk("news/fetchNews", async (data) => {
  let page = data?.page;
  let limit = data?.limit;
  try {
    const response = await getNews(page, limit);
    return response;
  } catch (error) {
    console.error("Error in fetching:", error);
  }
});

export const fetchNewsById = createAsyncThunk(
  "news/fetchNewsById",
  async (newsId) => {
    try {
      const response = await getNewsById(newsId);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchNewsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsById.fulfilled, (state, action) => {
        state.loading = false;
        state.news.newsDetails = action.payload;
      })
      .addCase(fetchNewsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
