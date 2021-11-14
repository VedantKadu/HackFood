import React from "react";

import MealItem from "./meal-item/MealItem";

const AvailableMeals = (props) => {
  // const veg = useSelector((state) => state.vegonly.veg);
  // const Searchitems = useSelector((state) => state.searchResult.items);
  // const Searchitemschange = useSelector((state) => state.searchResult.change);

  var requiredDishes = props.dishes;
  // if (veg) {
  //   requiredDishes = requiredDishes.filter((item) => item.veg === true);
  // }
  // if(Searchitemschange){
  //   // console.log(Searchitems);
  //   requiredDishes=Searchitems;
  // }

  return (
    <React.Fragment>
      {requiredDishes.length === 0 && (
        <p>Opps!!! No Veg Items In This Restaurent </p>
      )}
      {requiredDishes.map((item) => {
        return <MealItem item={item} key={item._id} />;
      })}
    </React.Fragment>
  );
};

export default AvailableMeals;
