import React, { Fragment } from "react";
import HomePage from "./HomePage";
import Navbar from "../../../components/customers/layout/navbar/Navbar";
// import RestaurentDetailPage from "../../../components/customers/layout/home/restaurent/RestaurentDetailPage";
import { Route, Routes } from "react-router";

const Customer = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {/* <Route path="/:restaurent_name" element={<RestaurentDetailPage />} /> */}
      </Routes>
    </Fragment>
  );
};

export default Customer;
