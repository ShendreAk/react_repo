import Items from "./items";
import { useState } from "react";

let FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (element, event) => {
    let newActiveItems = [...activeItems, element];
    setActiveItems(newActiveItems);
    console.log(event);
  }



  return (
    <ul className="list-group items">
      {items.map((element) => <Items key={element} foodItem={element} handleOnClick={(event) => onBuyButton(element, event)} active={activeItems.includes(element)}></Items>)
      }
    </ul >
  );
}
export default FoodItems;