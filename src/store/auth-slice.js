import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    loggedIn: true,
    customer: false,
  },
  reducers: {
    setLogged(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const authSliceActions = authSlice.actions;

export default authSlice;
