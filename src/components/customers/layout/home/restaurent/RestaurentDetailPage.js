import React from "react";
import styles from "./RestaurentDetailPage.module.css";
// import AvailableMeals from "../../meals/AvailableMeals";
// import Cart from "../../bag/Cart";
import Meals from "../../../../../components/customers/layout/meals/Meals";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const RestaurentDetailPage = () => {
  const url =
    "https://www.thespruceeats.com/thmb/kFPbPBvit_2pnmUt8lhABceAM-I=/3329x3329/smart/filters:no_upscale()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg";

  const params = useParams();
  const restaurentId = params.restaurent_id;

  const restaurentsList = useSelector((state) => state.restaurent.hotels);
  const restaurent = restaurentsList.find(
    (restaurent) => restaurent._id === restaurentId
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav_wrapper}>
        <div className={styles.res_image}>
          <img className={styles.image} src={url} alt="hotel dp" />
        </div>
        <div className={styles.res_info}>
          <div className={styles.resName}>{restaurent.restaurentName}</div>
          <div className={styles.resAddress}>
            {restaurent.address.locality}
            {`, ${restaurent.address.street}`}
          </div>
          <div className={styles.resBill}>
            Minimum Bill Amount :- {restaurent.minBill}
          </div>
        </div>
      </div>
      <div className={styles.body_wrapper}>
        <div className={styles.meals}>
          <Meals dishes={restaurent.dishes} />
        </div>
        <div className={styles.cart}>cart</div>
      </div>
    </div>
  );
};

export default RestaurentDetailPage;
