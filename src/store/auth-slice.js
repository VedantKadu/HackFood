import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    loggedIn: true,
    customer: true,
  },
  reducers: {
    setLoggedIn(state, action) {
      state.loggedIn = action.payload.loggedIn;
      state.customer = action.payload.customer;
    },
  },
});

export const authSliceActions = authSlice.actions;

export default authSlice;
