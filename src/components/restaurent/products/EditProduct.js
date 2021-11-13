import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditProduct.module.css";
// import productsList from "./ProductPageItems/DummyProducts";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Fragment, useState } from "react";
// import Register from "../../Pages/Register/RegisterPage";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { FormLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ProductsearchActions } from "../../Store/ProductSearch-slice";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  price: {
    "& > *": {
      margin: theme.spacing(2),
      width: "40%",
    },
  },
}));

function EditProduct() {
  const classes = useStyles();
  const history = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const productId = params.productId;

  const [product, setProduct] = useState({
    dish_name: "",
    price: "",
    description: "",
    discount: "",
    type: "",
    status: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/products/edit/" + productId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch status");
        }
        return res.json();
      })
      .then((resData) => {
        setProduct((prevState) => ({
          ...prevState,
          dish_name: resData.product.dish_name,
          price: resData.product.price,
          discount: resData.product.discount,
          type: resData.product.type,
          description: resData.product.description,
          status: resData.product.status,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  const handleBackPress = () => {
    history.push("/products");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    let url = "http://localhost:8080/products/edit/" + productId;
    let method = "PUT";

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        dish_name: product.dish_name,
        price: product.price,
        disprice: product.discount,
        description: product.description,
        type: product.type,
        status: product.status,
      }),
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating or editing a post failed!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        history.push("/products");
        dispatch(ProductsearchActions.changeReload());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const discounted_price = reqProduct.price - reqProduct.price*reqProduct.discount/100;
  // console.log(product)

  const inputChangeHandler = (event) => {
    setProduct((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <Fragment>
      <header className={styles["header"]}>
        <div className={styles["head-wrap"]}>
          <KeyboardBackspaceIcon fontSize="large" onClick={handleBackPress} />
          <span className={styles["heading"]}>Edit Product</span>
        </div>
        <div className={styles["btn"]}>
          <div className={styles["button"]} onClick={updateHandler}>
            Update
          </div>
        </div>
      </header>

      <div className={styles["newprod-wrap"]}>
        <div className={styles["form-wrap"]}>
          <h2>Product Information</h2>
          <form className={classes.root}>
            <TextField
              name="name"
              id="dish_name"
              label="Product Name"
              variant="outlined"
              value={product.dish_name}
              onChange={inputChangeHandler}
              fullWidth
              required
            ></TextField>
            <TextField
              name="description"
              id="description"
              label="Product Description"
              value={product.description}
              onChange={inputChangeHandler}
              variant="outlined"
              fullWidth
            ></TextField>

            <div className={classes.price}>
              <TextField
                name="Price"
                id="price"
                label="Price"
                variant="outlined"
                onChange={inputChangeHandler}
                value={product.price}
                required
              />
              <TextField
                name="DisPrice"
                id="discount"
                label="Discounted Price"
                onChange={inputChangeHandler}
                variant="outlined"
                value={product.discount}
              />
            </div>
            <div className={styles["veg"]}>
              <FormLabel component="legend">Veg/Non-Veg</FormLabel>
              <RadioGroup aria-label="veg" name="gender1" value={product.type}>
                <FormControlLabel
                  id="type"
                  value="Veg"
                  control={<Radio />}
                  label="Veg"
                />
                <FormControlLabel
                  id="type"
                  value="Non-Veg"
                  control={<Radio />}
                  label="Non-Veg"
                />
              </RadioGroup>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default EditProduct;
