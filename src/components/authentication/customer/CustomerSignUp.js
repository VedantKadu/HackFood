import React from "react";
import styles from "./CustomerSignUp.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  address: {
    "& > *": {
      margin: theme.spacing(4),
    },
  },
}));

const CustomerSignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    con_password: "",
    aptName: "",
    locality: "",
    street: "",
    zipcode: "",
    Contact: "",
  });
  const classes = useStyles();
  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const signupHandler = (event) => {
    // console.log(user);
    event.preventDefault();
    fetch("http://localhost:8080/customer/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
        Address: {
          aptName: user.aptName,
          locality: user.locality,
          street: user.street,
          zipCode: user.zipcode,
        },
        Contact: user.Contact,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw new Error("Creating a user failed!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log("Successfull", resData);
        navigate("/customer");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles["Reg-container"]}>
      <div className={styles["form-container"]}>
        <h1>Fill Details To Sign Up</h1>
        <form className={classes.root}>
          <TextField
            id="name"
            label="Name"
            placeholder="Your name"
            onChange={inputChangeHandler}
            fullWidth
            required
          ></TextField>
          <TextField
            id="email"
            label="Email"
            placeholder="Email Address"
            onChange={inputChangeHandler}
            fullWidth
            required
          ></TextField>
          <TextField
            id="password"
            name="password"
            type="password"
            onChange={inputChangeHandler}
            label="Password"
            className={classes.textField}
            fullWidth
            required
          />
          <TextField
            id="con_password"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            onChange={inputChangeHandler}
            fullWidth
            required
          />
          <Typography
            variant="body2"
            component="p"
            style={{ margin: "10px 10px 2px 10px" }}
          >
            Address:
          </Typography>
          <div className={classes.address}>
            <TextField
              id="aptName"
              name="aptName"
              label="Floor/Apartment Name"
              onChange={inputChangeHandler}
              required
            />
            <TextField
              id="locality"
              name="locality"
              label="Locality"
              onChange={inputChangeHandler}
              required
            />
            <TextField
              id="street"
              name="street"
              label="Street"
              onChange={inputChangeHandler}
              required
            />
            <TextField
              id="zipcode"
              name="zip"
              label="Zip Code"
              type="number"
              onChange={inputChangeHandler}
              required
            />
            <TextField
              id="Contact"
              name="phoneNo"
              label="Contact Number"
              type="number"
              onChange={inputChangeHandler}
              fullWidth
              required
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={signupHandler}
            style={{ marginTop: "10px", width: "15%" }}
          >
            Submit
          </Button>
          <div className={styles.signup}>
            Already have an account ? <Link to="/customer">Log In here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerSignUp;
