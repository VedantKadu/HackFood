import React from "react";
import { Link, NavLink } from "react-router-dom";

// css imports
import styles from "./navbar.module.css";

// image imports
import logo_img from "../../../assets/hamburger.jpg";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles["nav-container"]}>
            <div className={styles["logo-container"]}>
              <div className={styles["brand-container"]}>
                <div className={styles["logo"]}>
                  <Link to="/home">
                    <img
                      className={styles["nav-logo"]}
                      src={logo_img}
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className={styles["brand-name"]}>
                  <Link to="/home" className={styles.brandName}>
                    The Food's Man
                  </Link>
                </div>
              </div>
            </div>
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
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
