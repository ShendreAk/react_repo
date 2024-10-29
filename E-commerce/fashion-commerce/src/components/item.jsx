import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store";
import { summaryActions } from "../store";
import { RiAddCircleFill } from "react-icons/ri";
// import { IoRemoveCircleSharp } from "react-icons/io5";

const DisplayHome = ({ item }) => {
  const dispatch = useDispatch();
  // const cartItem = useSelector(store => store.cart);
  // console.log("cartItem", cartItem);
  // const itemFound = cartItem.indexOf(item) >= 0;
  // console.log(itemFound);
  const handleAddtoBag = () => {
    dispatch(cartActions.addCartItems(item))
    dispatch(summaryActions.editaddSummary(item))

  }
  // const handleRemovetoBag = () => {
  //   dispatch(cartActions.deleteCartItem(item))
  //   dispatch(summaryActions.editsubSummary(item))

  // }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag addtobag" onClick={handleAddtoBag}> <RiAddCircleFill className="icon" />
        Add to Bag</button>
      {/* <button className="btn-add-bag removefrombag" onClick={handleRemovetoBag}> <IoRemoveCircleSharp className="icon" />
        Remove from Bag</button> */}
    </div>
  );
}
export default DisplayHome;