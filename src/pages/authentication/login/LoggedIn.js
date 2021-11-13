import React from "react";
import Customer from "../../customer/home/Customer";
import { useSelector } from "react-redux";

const LoggedIn = () => {
  const customer = useSelector((state) => state.logIn.customer);

  return customer && <Customer />;
};

export default LoggedIn;
