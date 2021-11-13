import React from "react";
import styles from "./AccountModal.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { AccountModalActions } from "../../../store/AccountModal-slice";
import Switch from "./Switch";
import { authSliceActions } from "../../../store/auth-slice";
import { useNavigate } from "react-router";

const Overley = (props) => {
  const [value, setValue] = React.useState(true);
  const dispatch = useDispatch();
  const history = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("restaurentToken");
    dispatch(authSliceActions.setLoggedIn({loggedIn:false,customer: true}));
    history("/");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles["switch"]}>
          <span className={styles.store}>Store Status:</span>
          <Switch
            onColor="rgb(11, 192, 11)"
            isOn={value}
            handleToggle={() => setValue(!value)}
          />
        </div>

        <div className={styles.main}>
          <div className={styles["main-items"]}>
            <AccountCircleIcon fontSize="large" />
            <p className={styles.text}>My Account </p>
          </div>
          <div className={styles["main-items"]} onClick={logOutHandler}>
            <LogoutIcon fontSize="large" />
            <p className={styles.text} >Sign Out </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Backdrop = (props) => {
  const dispatch = useDispatch();

  const AccountModalHandler = () => {
    dispatch(AccountModalActions.setview());
  };

  return <div className={styles["backdrop"]} onClick={AccountModalHandler}></div>;
};

const AccountModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overley"))}
      {ReactDOM.createPortal(
        <Overley>{props.children}</Overley>,
        document.getElementById("overley")
      )}
    </Fragment>
  );
};

export default AccountModal;
