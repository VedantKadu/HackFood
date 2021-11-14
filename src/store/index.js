import { configureStore } from "@reduxjs/toolkit";
import accountModalSlice from "./accountModal-slice";
import authSlice from "./auth-slice";
import productSearchSlice from "./productSearch-slice";
import restaurentSlice from "./restaurentData-slice";
import cartSlice from "./cart-slice";

const Store = configureStore({
  reducer: {
    logIn: authSlice.reducer,
    productSearch: productSearchSlice.reducer,
    accountModal: accountModalSlice.reducer,
    restaurent: restaurentSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default Store;
