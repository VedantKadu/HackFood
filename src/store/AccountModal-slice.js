import { createSlice } from "@reduxjs/toolkit";

const AccountModalSlice = createSlice({
  name: "Account Modal",
  initialState: {
    view: false,
  },
  reducers: {
    setview(state) {
      state.view = !state.view;
    },
  },
});
export const AccountModalActions = AccountModalSlice.actions;
export default AccountModalSlice;
