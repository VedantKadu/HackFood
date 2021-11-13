import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import HomePage from "../../customer/home/HomePage";
import Navbar from "../../../components/customers/layout/navbar/Navbar";

const LoggedIn = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Fragment>
  );
};

export default LoggedIn;
