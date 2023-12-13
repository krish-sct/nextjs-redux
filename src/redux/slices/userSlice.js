import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  users: {
    totalPages: 0,
    currentPage: 0,
    users: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   state.users = [...state.users, action.payload];
    // },
    // removeUser: (state, action) => {
    //   const newUsers = state.users.filter((user) => user.id !== action.payload);
    //   state.users = newUsers;
    // },
    setUsers: (state, action) => {
      state.users = { ...action.payload };
    },
  },
});
export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
