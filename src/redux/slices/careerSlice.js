import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCareers } from "../../utils/apis";

const initialState = {
  careers: {
    totalPages: 0,
    currentPage: 0,
    careers: [],
  },
  loading: false,
  error: null,
};

export const fetchCareer = createAsyncThunk(
  "career/fetchCareer",
  async (page, limit) => {
    const response = await getCareers(page, limit);
    console.log({ response });
    return response.data;
  }
);

export const careerSlice = createSlice({
  name: "careers",
  initialState,
  reducers: {
    setCareers: (state, action) => {
      state.careers = { ...action.payload };
    },
    extraReducers: {
      [fetchCareer.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchCareer.fulfilled]: (state, action) => {
        state.loading = false;
        state.careers = action.payload;
      },
      [fetchCareer.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    },
  },
});

export const { setCareers } = careerSlice.actions;
export default careerSlice.reducer;
