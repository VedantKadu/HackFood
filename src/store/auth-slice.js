import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    loggedIn: true,
    customer: true,
  },
  reducers: {
    setLogged(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const authSliceActions = authSlice.actions;

export default authSlice;
