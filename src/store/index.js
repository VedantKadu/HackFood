import { configureStore } from "@reduxjs/toolkit";
import AccountModalSlice from "./AccountModal-slice";
import authSlice from "./auth-slice";
import ProductsearchSlice from "./ProductSearch-slice";

const Store = configureStore({
  reducer: {
    logIn: authSlice.reducer,
    productSearch: ProductsearchSlice.reducer,
    AccountModal: AccountModalSlice.reducer,
  },
});

export default Store;
