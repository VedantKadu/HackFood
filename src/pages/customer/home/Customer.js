import React, { Fragment, useEffect } from "react";
import HomePage from "./HomePage";
import Navbar from "../../../components/customers/layout/navbar/Navbar";
import RestaurentDetailPage from "../../../components/customers/layout/home/restaurent/RestaurentDetailPage";
import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RestaurentDataActions } from "../../../store/restaurentData-slice";

const Customer = () => {
  const dispatch = useDispatch();
  const restaurentList = useSelector((state) => state.restaurent.hotels);
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);

  useEffect(() => {
    fetch("http://localhost:8080/customer/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("customerToken"),
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch products.");
        }
        return res.json();
      })
      .then((resData) => {
        dispatch(RestaurentDataActions.changeData(resData.hotels));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  return (
    <Fragment>
      <Navbar />
      {restaurentList.length > 0 ? (
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/:restaurent_id" element={<RestaurentDetailPage />} />
        </Routes>
      ) : (
        <h1>Loading....</h1>
      )}
    </Fragment>
  );
};

export default Customer;
