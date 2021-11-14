import styles from "./header.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountModal from "./AccountModal";
import { accountModalActions } from "../../../store/accountModal-slice";
import { useDispatch, useSelector } from "react-redux";

function Header(props) {
  const AccountModalView = useSelector((state) => state.AccountModal.view);
  const dispatch = useDispatch();

  const AccountModalHandler = () => {
    dispatch(accountModalActions.setview());
  };

  return (
    <header className={styles["header"]}>
      <span className={styles["brand"]}>{props.header}</span>
      <nav className={styles["navbar"]}>
        <span />
        <span onClick={AccountModalHandler}>
          <AccountCircleIcon fontSize="large" />
        </span>
        {AccountModalView && <AccountModal onClick={AccountModalHandler} />}
      </nav>
    </header>
  );
}

export default Header;
