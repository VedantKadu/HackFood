import styles from "./ProductPage.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ViewListIcon from "@material-ui/icons/ViewList";
import AppsIcon from "@material-ui/icons/Apps";
import Header from "../../../components/restaurent/ui/Header";
import ProductsTable from "../../../components/restaurent/products/ProductPageItems/ProductsTable";
import { Fragment } from "react";

// import { ProductsearchActions } from "./../../Store/ProductSearch-slice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

function ProductPage() {
  // const history = useHistory();
  // const wordEntered = useSelector((state) => state.Productsearch.enteredWord);
  // const productlist = useSelector((state) => state.Productsearch.filteredData);
  // const reload = useSelector((state) => state.Productsearch.reload);
  // const ProductSearchBy = useSelector(
  //   (state) => state.Productsearch.ProductsearchBy
  // );
  // const dispatch = useDispatch();

  // const addNewProduct = () => {
  //   history.push("/products/new-product");
  // };

  // const handleFilter = (event) => {
  //   const searchedWord = event.target.value;
  //   dispatch(ProductsearchActions.setEnteredWord(searchedWord));
  //   const newFilter = productlist.filter((value) => {
  //     if (ProductSearchBy === "_id")
  //       return value._id.toLowerCase().includes(searchedWord.toLowerCase());
  //     return value.dish_name.toLowerCase().includes(searchedWord.toLowerCase());
  //   });

  //   if (searchedWord !== "") {
  //     dispatch(ProductsearchActions.changeSearchData(newFilter));
  //   }
  // };

  // const searchbyHandler = (event) => {
  //   dispatch(ProductsearchActions.changeSearchBy(event.target.value));
  // };

  //   useEffect( () =>{
  //     fetch('http://localhost:8080/products',{
  //       headers: {
  //         Authorization: 'Bearer ' + localStorage.getItem("token")
  //       }
  //     })
  //       .then(res => {
  //         if (res.status !== 200) {
  //           throw new Error('Failed to fetch products.');
  //         }
  //         return res.json();
  //       })
  //       .then(resData => {
  //         dispatch(ProductsearchActions.changeFilteredData(resData.products));
  //       })
  //       .catch((err)=>{
  //         console.log(err);
  //       });
  //   },[dispatch]);

  //   const reloadPage =()=>{
  //     window.location.reload();
  //     dispatch(ProductsearchActions.changeReload());
  //   }

  return (
    <Fragment>
      {/* {reload && reloadPage()} */}
      <div className={styles["product"]}>
        <Header header="All Products" />
        <main className={styles["product-body"]}>
          <div className={styles["product-nav-wrap"]}>
            <div className={styles["product-search"]}>
              <SearchIcon />
              {/* <input
                  type="search"
                  placeholder={
                    ProductSearchBy === "_id"
                      ? "Search Product ID"
                      : "Search Product Name"
                  }
                  value={wordEntered}
                  onChange={handleFilter}
                ></input> */}
            </div>
            <div className={styles["select-wrapper"]}>
              <select className={styles["select"]}>
                <option value="_id">Search By Product ID</option>
                <option value="name">Search By Product Name</option>
              </select>
            </div>
            <div className={styles["product-view"]}>
              <span>
                <ViewListIcon fontSize="large" />
              </span>
              <span>
                <AppsIcon fontSize="large" />
              </span>
              <div className={styles["btn"]}>
                <div className={styles["button"]}>Add New Product</div>
              </div>
            </div>
          </div>
          <div className={styles["productlist"]}>
            <ProductsTable />
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default ProductPage;
