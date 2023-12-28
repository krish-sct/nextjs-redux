import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addContactForm as apiAddContactForm } from "../../utils/apis";

const initialState = {
  contactforms: {
    totalPages: 0,
    currentPage: 0,
    contactforms: [],
  },
  loading: false,
  error: null,
};

export const addContactForm = createAsyncThunk(
  "contactforms/addContactForm",
  async (data) => {
    try {
      const response = await apiAddContactForm(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const contactUSSlice = createSlice({
  name: "contactform",
  initialState,
  reducers: {
    setContactForms: (state, action) => {
      console.log({ action });
      state.contactforms = { ...action.payload };
    },
  },
});

export const { setContactForms } = contactUSSlice.actions;

export default contactUSSlice.reducer;
