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
  async (page, limit) => {
    const response = await getEventTradeShows(page, limit);
    console.log({ response });
    return response.data;
  }
);

export const eventTradeShowsSlice = createSlice({
  name: "eventTradeShow",
  initialState,
  reducers: {
    setEventTradeShows: (state, action) => {
      state.eventTradeShows = { ...action.payload };
    },
    extraReducers: {
      [fetchEventTradeShow.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchEventTradeShow.fulfilled]: (state, action) => {
        state.loading = false;
        state.eventTradeShows = action.payload;
      },
      [fetchEventTradeShow.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    },
  },
});

export const { setEventTradeShows } = eventTradeShowsSlice.actions;
export default eventTradeShowsSlice.reducer;
