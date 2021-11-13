import React from "react";
import styles from "./RestaurentDetailPage.module.css";
// import AvailableMeals from "../../meals/AvailableMeals";
// import Cart from "../../bag/Cart";
import MealItem from "../../meals/meal-item/MealItem";

const RestaurentDetailPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav_wrapper}>
        <div className={styles.res_image}></div>
        <div className={styles.res_info}></div>
      </div>
      <div className={styles.body_wrapper}>
        <div className={styles.meals}>
          <MealItem />
        </div>
        <div className={styles.cart}>cart</div>
      </div>
    </div>
  );
};

export default RestaurentDetailPage;
