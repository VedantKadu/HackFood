import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";

const Store = configureStore({
  reducer: {
    logIn: authSlice.reducer,
  },
});

export default Store;
