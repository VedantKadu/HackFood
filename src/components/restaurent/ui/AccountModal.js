import React from "react";
import styles from "./AccountModal.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Fragment } from "react";
import ReactDOM from "react-dom";
// import { useDispatch } from "react-redux";
// import { AccountModalActions } from "../../Store/AccountModal-slice";
import Switch from "./Switch";
// import { authenticationActions } from "../../Store/Authentication";
// import { useNavigate } from "react-router";

const Overley = (props) => {
  const [value, setValue] = React.useState(true);
  // const dispatch = useDispatch();
  // const history = useNavigate();

  // const logOutHandler = () => {
  //   localStorage.removeItem("token");
  //   dispatch(authenticationActions.setLoggedIn());
  //   history.push("/");
  // };
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
          <div className={styles["main-items"]}>
            <LogoutIcon fontSize="large" />
            <p className={styles.text}>Sign Out </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Backdrop = (props) => {
  // const dispatch = useDispatch();

  return <div className={styles["backdrop"]}></div>;
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
