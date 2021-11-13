import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../../components/customers/layout/navbar/Navbar";
import Choice from "../../../components/authentication/Choice";
import CustomerLogIn from "../../../components/authentication/customer/CustomerLogIn";
import CustomerSignUp from "../../../components/authentication/customer/CustomerSignUp";
import RestaurentLogIn from "../../../components/authentication/restaurent/RestaurentLogIn";
import RestaurentRegister from "../../../components/authentication/restaurent/RestaurentRegister";

const NotLoggedIn = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Choice />} />
        <Route path="/customer/signup" element={<CustomerSignUp />} />
        <Route path="/customer" element={<CustomerLogIn />} />
        <Route path="/restaurent/signup" element={<RestaurentRegister />} />
        <Route path="/restaurent" element={<RestaurentLogIn />} />
      </Routes>
    </Fragment>
  );
};

export default NotLoggedIn;
