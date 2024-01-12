import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEventTradeShowsConfig } from "../../utils/apis";

const initialState = {
  eventTradeShowsConfigs: {},
  loading: false,
  error: null,
};

export const fetchEventTradeShowsConfig = createAsyncThunk(
  "eventTradeShowsConfig/fetchEventTradeShowsConfig",
  async () => {
    try {
      const response = await getEventTradeShowsConfig();
      return response;
    } catch (error) {
      console.error("Error in fetching:", error);
      throw error;
    }
  }
);

export const eventTradeShowsConfigSlice = createSlice({
  name: "eventTradeShowsConfig",
  initialState,
  reducers: {
    setEventTradeShowsConfig: (state, action) => {
      state.eventTradeShowsConfigs = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventTradeShowsConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEventTradeShowsConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.eventTradeShowsConfigs = action.payload;
      })
      .addCase(fetchEventTradeShowsConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setEventTradeShowsConfig } = eventTradeShowsConfigSlice.actions;
export default eventTradeShowsConfigSlice.reducer;
