import React from "react";
import HomePageItem from "../../../components/customers/layout/home/home-items/HomePageItem";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const item = {
    id: "m1",
    name: "Mutton Curry",
    price: 300,
    discount: 20,
    veg: false,
    url: "https://www.thespruceeats.com/thmb/kFPbPBvit_2pnmUt8lhABceAM-I=/3329x3329/smart/filters:no_upscale()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg",
    description: "",
    hotel_name: "Kerla Restaurent",
  };
  return (
    <div className={styles.home_wrapper}>
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
      <HomePageItem item={item} />
    </div>
  );
};

export default HomePage;
