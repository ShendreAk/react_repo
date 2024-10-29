import CartSummary from "../components/cartsummary";
import CartItems from "../components/cartItems";
import { useSelector } from "react-redux";
const Cart = () => {
  const items = useSelector(store => store.cart);
  console.log("items in cart:", items);
  // const summary = {
  //   totalItem: 1,
  //   totalDiscount: 100,
  //   totalMRP: 1000,
  //   finalPayment: 999
  // }
  // const items = [{
  //   id: '001',
  //   image: 'images/1.jpg',
  //   company: 'Carlton London',
  //   item_name: 'Rhodium-Plated CZ Floral Studs',
  //   original_price: 1045,
  //   current_price: 606,
  //   discount_percentage: 42,
  //   return_period: 14,
  //   delivery_date: '10 Oct 2023',
  //   rating: {
  //     stars: 4.5,
  //     count: 1400,
  //   },
  // }]

  return (<>

    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {items.map((item) => <CartItems key={item.id} item={item}></CartItems>)}
        </div>
        <CartSummary></CartSummary>
      </div>

    </main>

  </>)
}
export default Cart;