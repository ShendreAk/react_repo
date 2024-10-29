import styles from "./items.module.css";
// let Items = (props) => {

//   return (
//     <li className={`list-group-item ${styles.akItems}`}>
//       <span>{props.foodItem}</span>
//       <button
//         className={`${styles.button} btn btn-info`}
//         onClick={(event) => {
//           console.log(event);
//           console.log(`${props.foodItem} is bought`)
//         }}>
//         Buy
//       </button>
//     </li >
//   );
// }
// export default Items;

// let Items = ({ foodItem, handleOnClick }) => {

//   return (
//     <li className={`list-group-item ${styles.akItems}`}>
//       <span>{foodItem}</span>
//       <button
//         className={`${styles.button} btn btn-info`}
//         onClick={
//           handleOnClick
//         }>
//         Buy
//       </button>
//     </li >
//   );
// };
// export default Items;

let Items = ({ foodItem, handleOnClick, active }) => {
  let activeClass = active ? 'active' : "";
  console.log(activeClass);
  return (
    <li className={`${styles.akItems} list-group-item ${activeClass}`}>
      <span>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleOnClick}>
        Buy
      </button>
    </li >
  );
};
export default Items;

