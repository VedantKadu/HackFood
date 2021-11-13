import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../customer/CustomerLogIn.module.css";

const RestaurentLogIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (event) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div className={styles.loginform}>
      <h2 className={styles.header}>Login</h2>
      <form autoComplete="off">
        <div className={styles.row}>
          <label>Username</label>
          <input
            id="email"
            type="text"
            value={user.email}
            placeholder="Enter your username"
            onInput={inputChangeHandler}
          />
        </div>
        <div className={styles.row}>
          <label>Password</label>
          <input
            id="password"
            type="password"
            value={user.password}
            placeholder="Enter your password"
            onInput={inputChangeHandler}
          />
        </div>
        <button className={styles.btn}>Log In </button>
        <div className={styles.signup}>
          don't have an account ? sign up{" "}
          <Link to="/restaurent/signup">here</Link>
        </div>
      </form>
    </div>
  );
};

export default RestaurentLogIn;
