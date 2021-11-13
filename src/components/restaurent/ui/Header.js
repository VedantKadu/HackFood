import styles from "./header.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import AccountModal from "./AccountModal";
// import { AccountModalActions } from "./../../Store/AccountModal-slice";
// import { useDispatch } from "react-redux";

function Header(props) {
  // const AccountModalView = useSelector((state) => state.AccountModal.view);
  // const dispatch = useDispatch();

  // const AccountModalHandler = () => {
  //   // dispatch(AccountModalActions.setview());
  // };

  return (
    <header className={styles["header"]}>
      <span className={styles["brand"]}>{props.header}</span>
      <nav className={styles["navbar"]}>
        <span>
          <NotificationsIcon fontSize="large" />
        </span>
        <span>
          <AccountCircleIcon fontSize="large" />
        </span>
        {/* {AccountModalView && <AccountModal onClick={AccountModalHandler}/>} */}
      </nav>
    </header>
  );
}

export default Header;
