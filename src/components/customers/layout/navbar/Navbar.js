import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// css imports
import styles from "./Navbar.module.css";

// image imports
import logo_img from "../../../../assets/hamburger.jpg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Navbar = (props) => {
  const logIn = useSelector((state) => state.logIn.loggedIn);
  // const [location, setLocation] = useState({
  //   latitude: "",
  //   longitude: "",
  //   address: "",
  // });

  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(getCoordinate, showError);
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }

  // function getCoordinate(position) {
  //   setLocation({
  //     latitude: position.coords.latitude,
  //     longitude: position.coords.longitude,
  //   });
  // }
  console.log(location);
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

  return (
    <React.Fragment>
      <div>
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
                      to="/bag"
                    >
                      <span>
                        <LocalMallOutlinedIcon />
                      </span>
                      Bag
                    </NavLink>
                  </div>

                  <div>
                    <NavLink
                      to="/account"
                      activeClassName={styles.active}
                      className={styles["navbar-link"]}
                    >
                      <span>
                        <AccountCircleOutlinedIcon />
                      </span>
                      Account
                    </NavLink>
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
        <div className={styles["mobile-nav"]}>
          <div>
            <NavLink
              to="/"
              activeClassName={styles["active-mobile"]}
              className={`${styles["navbar-link"]} ${styles["mobile-links"]}`}
            >
              <span>
                <HomeOutlinedIcon />
              </span>
              Home
            </NavLink>
            <NavLink
              to="/bag"
              activeClassName={styles["active-mobile"]}
              className={`${styles["navbar-link"]} ${styles["mobile-links"]}`}
            >
              <span>
                <LocalMallOutlinedIcon />
              </span>
              Bag
            </NavLink>

            <NavLink
              activeClassName={styles["active-mobile"]}
              className={`${styles["navbar-link"]} ${styles["mobile-links"]}`}
              to="/account"
            >
              <span>
                <AccountCircleOutlinedIcon />
              </span>
              Account
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
