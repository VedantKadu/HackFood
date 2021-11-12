import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    setLogged(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const authSliceActions = authSlice.actions;

export default authSlice;
