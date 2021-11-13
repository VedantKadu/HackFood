import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/cart-slice";
import AddSubtractButton from "../AddSubtractButton";
import styles from "./BagItem.module.css";



const BagItem = (props) => {
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
      <li className={styles["bag-item"]}>
        <div className={styles["img-wrapper"]}>
          <img src={props.url} alt="meal-img" />
        </div>
        <div className={styles["content-wrapper"]}>
          <h4>{props.name}</h4>
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
        </div>
      </li>
    </Fragment>
  );
};

export default BagItem;
