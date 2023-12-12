const { configureStore } = require("@reduxjs/toolkit");
import userReducer from "./slices/userSlice";
import testimonialReducer from "./slices/testimonialSlice";
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    testimonialData: testimonialReducer,
  },
});
export default store;
