import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getArticles } from "../../utils/apis";

const initialState = {
  articles: {
    totalPages: 0,
    currentPage: 0,
    articles: [],
  },
  loading: false,
  error: null,
};

export const fetchArticle = createAsyncThunk(
  "articles/fetchArticle",
  async (page, limit) => {
    const response = await getArticles(page, limit);
    console.log({ response });
    return response.data;
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = { ...action.payload };
    },
    extraReducers: {
      [fetchArticle.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchArticle.fulfilled]: (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      },
      [fetchArticle.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    },
  },
});

export const { setArticles } = articleSlice.actions;
export default articleSlice.reducer;
