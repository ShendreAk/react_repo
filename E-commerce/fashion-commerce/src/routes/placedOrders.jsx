import { useSelector } from "react-redux";

const PlacedOrder = () => {
  const summary = useSelector(store => store.summary);
  console.log("nameOfItems", summary.nameOfItems);
  return (<div className="card" style={{ width: "18rem" }}>
    <ul className="list-group list-group-flush">
      {summary.nameOfItems.map((nameitem) => <li className="list-group-item">{nameitem}</li>)}
    </ul>
  </div>)
}
export default PlacedOrder;