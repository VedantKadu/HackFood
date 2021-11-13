import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// css imports
import styles from "./Navbar.module.css";

// image imports
import logo_img from "../../../../assets/hamburger.jpg";

const Navbar = (props) => {
  const logIn = useSelector((state) => state.logIn.loggedIn);

  return (
    <React.Fragment>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles["nav-container"]}>
            <div className={styles["logo-container"]}>
              <div className={styles["brand-container"]}>
                <div className={styles["logo"]}>
                  <Link to="/">
                    <img
                      className={styles["nav-logo"]}
                      src={logo_img}
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className={styles["brand-name"]}>
                  <Link to="/" className={styles.brandName}>
                    The Food's Man
                  </Link>
                </div>
              </div>
            </div>
            {logIn ? (
              <div className={styles["icon-container"]}>
                <div>
                  <NavLink
                    activeClassName={styles.active}
                    className={styles["navbar-link"]}
                    to="customer/bag"
                  >
                    <span></span>
                    Bag
                  </NavLink>
                </div>

                <div>
                  <a href=" " className={styles["navbar-link"]}>
                    <span></span>
                    Account
                  </a>
                </div>
              </div>
            ) : (
              <div className={styles["icon-container"]}>
                <div>
                  <NavLink
                    activeClassName={styles.active}
                    className={styles["navbar-link"]}
                    to="/customer"
                    exact
                  >
                    <span></span>
                    Customer
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    activeClassName={styles.active}
                    className={styles["navbar-link"]}
                    to="/restaurent"
                    exact
                  >
                    <span></span>
                    Restaurent
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
