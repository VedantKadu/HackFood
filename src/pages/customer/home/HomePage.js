import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePageItem from "../../../components/customers/layout/home/home-items/HomePageItem";
import { RestaurentDataActions } from "../../../store/RestaurentData-slice";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const restaurentList = useSelector((state) => state.restaurent.hotels);

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
    <div className={styles.home_wrapper}>
      {restaurentList.length > 0 &&
        restaurentList.map((restaurent) => {
          return <HomePageItem item={restaurent} />;
        })}
    </div>
  );
};

export default HomePage;
