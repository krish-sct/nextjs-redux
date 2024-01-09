import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getArticleById, getArticles } from "../../utils/apis";

const initialState = {
  articles: {
    totalPages: 0,
    currentPage: 0,
    articles: [],
    articleDetails: {},
  },
  loading: false,
  error: null,
};

export const fetchArticle = createAsyncThunk(
  "articles/fetchArticle",
  async (data) => {
    let page = data?.page;
    let limit = data?.limit;
    try {
      const response = await getArticles(page, limit);
      return response;
    } catch (error) {
      console.error("Error", error);
    }
  }
);

export const fetchArticleById = createAsyncThunk(
  "articles/fetchArticleById",
  async (articleId) => {
    try {
      const response = await getArticleById(articleId);
      return response;
    } catch (error) {
      console.error("Error", error);
    }
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.articles.articleDetails = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setArticles } = articleSlice.actions;
export default articleSlice.reducer;
