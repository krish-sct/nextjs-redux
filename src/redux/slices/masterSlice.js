import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMaster, addMaster as apiAddMaster } from "../../utils/apis";

const initialState = {
  masterData: {},
  loading: false,
  error: null,
};

export const fetchMaster = createAsyncThunk("master/fetchMaster", async () => {
  try {
    const response = await getMaster();
    return response;
  } catch (error) {
    console.error("Error in fetching:", error);
    throw error;
  }
});

export const addMaster = createAsyncThunk("masters/addMaster", async (data) => {
  try {
    const response = await apiAddMaster(data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    // setMaster: (state, action) => {
    //   state.masters = { ...action.payload };
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaster.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMaster.fulfilled, (state, action) => {
        state.loading = false;
        state.masterData = action.payload;
      })
      .addCase(fetchMaster.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//export const { setMaster } = masterSlice.actions;
export default masterSlice.reducer;
