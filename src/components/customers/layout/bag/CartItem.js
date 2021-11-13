import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import styles from "./CartItem.module.css";
import AddSubtractButton from "../UI/AddSubtractButton";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const addCartItemHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        discount: props.discount,
        hotel_name: props.hotel_name,
      })
    );
  };
  const removeCartItemHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  const sellingPrice = Math.ceil(
    props.price - (props.discount * props.price) / 100
  );
  return (
    <Fragment>
      <li className={styles["cart-item"]}>
        <h6>{props.name}</h6>
        <div>
          <p>
            ₹{sellingPrice}
            <span> ₹{props.price}</span>
          </p>
          <AddSubtractButton
            className={styles["addsubtract-button"]}
            id={props.id}
            onAddItem={addCartItemHandler}
            onRemoveItem={removeCartItemHandler}
          />
        </div>
      </li>
    </Fragment>
  );
};

export default CartItem;
