import React from "react";
import { Link } from "react-router-dom";

import styles from "./HomePageItem.module.css";

const HomePageItem = (props) => {
  const selling_price = Math.ceil(
    props.item.price - (props.item.discount * props.item.price) / 100
  );

  return (
    <Link to={"/" + props.item.hotel_name} className={styles["cards_item"]}>
      <div className={styles["card"]}>
        <img className={styles["img"]} src={props.item.url} alt="" />
        <h2 className={styles["card__title"]}>{props.item.hotel_name}</h2>
        <span className={styles["card__description"]}>snacks</span>
        <div className={styles["card__shop"]}>
          <div className={styles["item-amount"]}>
            min bill amount
            <span className={styles["strikedout-amount"]}>
              ₹{selling_price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomePageItem;
