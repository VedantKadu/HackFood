import React, { Fragment } from "react";
import SideNav from "../../../components/restaurent/sidenav/SideNav";
import { Route, Routes } from "react-router";
import ProductPage from "../products/ProductPage";
import OrderPage from "../orders/OrderPage";

const Restaurent = () => {
  return (
    <Fragment>
      <SideNav />
      <Routes>
        <Route path="/" exact element={<ProductPage />} />
        <Route path="/orders" exact element={<OrderPage />} />
        <Route
          path="*"
          element={
            <div>
              <h1>No page found</h1>
            </div>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default Restaurent;
