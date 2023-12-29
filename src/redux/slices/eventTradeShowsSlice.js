import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEventTradeShows } from "../../utils/apis";

const initialState = {
  eventTradeShows: {
    totalPages: 0,
    currentPage: 0,
    eventTradeShows: [],
  },
  loading: false,
  error: null,
};

export const fetchEventTradeShow = createAsyncThunk(
  "eventTradeShows/fetchEventTradeShow",
  async (data) => {
    let page = data?.page;
    let limit = data?.limit;
    try {
      const response = await getEventTradeShows(page, limit);
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
    }
  }
);

export const eventTradeShowsSlice = createSlice({
  name: "eventTradeShow",
  initialState,
  reducers: {
    setEventTradeShows: (state, action) => {
      state.eventTradeShows = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventTradeShow.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEventTradeShow.fulfilled, (state, action) => {
        state.loading = false;
        state.eventTradeShows = action.payload;
      })
      .addCase(fetchEventTradeShow.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setEventTradeShows } = eventTradeShowsSlice.actions;
export default eventTradeShowsSlice.reducer;
