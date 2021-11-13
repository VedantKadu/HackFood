import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Link, useLocation } from "react-router-dom";

//Files imports
import Header from "../../Components/UI/Header";
import OrderTable from "../../Components/Orders/OrderPageItems/OrderTable";
import OTGrid from "../../Components/Orders/OrderPageItems/Grid/OTGrid";
import DummyOrders from "./../../Components/Orders/DummyOrders";
import Button from "../../Components/UI/Button";
import styles from "./OrderPage.module.css";
import OrderDetailPage from "../../Components/Orders/OrderDetailPage";

// Material UI imports
import SearchIcon from "@material-ui/icons/Search";
import ViewListIcon from "@material-ui/icons/ViewList";
import AppsIcon from "@material-ui/icons/Apps";

// Actions imports
import { OrdersearchActions } from "./../../Store/OrderSearch-slice";

function OrderPage() {
  const OwordEntered = useSelector((state) => state.Ordersearch.OenteredWord);
  const OrderSearchBy = useSelector((state) => state.Ordersearch.OrdersearchBy);
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location);

  const [view, setView] = useState("list");
  const changeViewList = () => {
    if (view !== "list") setView("list");
  };
  const changeViewGrid = () => {
    if (view !== "grid") setView("grid");
  };

  const handleFilter = (event) => {
    const searchedWord = event.target.value;
    dispatch(OrdersearchActions.setEnteredWord(searchedWord));

    const newFilter = DummyOrders.filter((value) => {
      if (OrderSearchBy === "_id")
        return value._id.toLowerCase().includes(searchedWord.toLowerCase());
      return value.name.toLowerCase().includes(searchedWord.toLowerCase());
    });

    if (searchedWord === "") {
      dispatch(OrdersearchActions.changeFilteredData(DummyOrders));
    } else {
      dispatch(OrdersearchActions.changeFilteredData(newFilter));
    }
  };

  const searchbyHandler = (event) => {
    dispatch(OrdersearchActions.changeSearchBy(event.target.value));
  };

  return (
    <Switch>
      <Route path="/orders" exact>
        <div className={styles["order"]}>
          <Header header="All Orders" />
          <main className={styles["order-body"]}>
            <div className={styles["search-wrapper"]}>
              <div className={styles["order-search"]}>
                <SearchIcon />
                <input
                  type="search"
                  placeholder={
                    OrderSearchBy === "_id"
                      ? "Search Order ID"
                      : "Search Customer Name"
                  }
                  value={OwordEntered}
                  onChange={handleFilter}
                ></input>
              </div>
              <div className={styles["select-wrapper"]}>
                <select className={styles["select"]} onChange={searchbyHandler}>
                  <option value="_id">Search By Order ID</option>
                  <option value="name">Search By Customer Name</option>
                </select>
              </div>
            </div>

            <div className={styles["order-nav-wrap"]}>
              <div className={styles["order-nav"]}>
                <div className={styles["buttons"]}>
                  <Link className={styles["button-links"]}>
                    <Button
                      to={`${location.pathname}`}
                      count="89"
                      active={true}
                    >
                      All
                    </Button>
                  </Link>
                  <Link
                    to={`${location.pathname}?status=0`}
                    className={styles["button-links"]}
                  >
                    <Button count="3" active={false}>
                      Pending
                    </Button>
                  </Link>
                  <Link
                    to={`${location.pathname}?status=1`}
                    className={styles["button-links"]}
                  >
                    <Button count="10" active={false}>
                      Accepted
                    </Button>
                  </Link>
                </div>
              </div>
              <div className={styles["order-view"]}>
                <span onClick={changeViewList}>
                  <ViewListIcon fontSize="large" />
                </span>
                <span onClick={changeViewGrid}>
                  <AppsIcon fontSize="large" />
                </span>
              </div>
            </div>
            <div className={styles["orderlist"]}>
              {view === "list" ? <OrderTable /> : <OTGrid />}
            </div>
          </main>
        </div>
      </Route>
      <Route path="/orders/:orderId">
        <OrderDetailPage />
      </Route>
    </Switch>
  );
}

export default OrderPage;
