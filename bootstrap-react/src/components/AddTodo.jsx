// import addcss from "/Users/akshayshendre/Desktop/react/bootstrap-react/src/css/AddToDo.module.css"
// import { IoIosAddCircleOutline } from "react-icons/io";

// function AddToDo({ displayValue, dateValue, handleTextValue, handleDate, handleOnClick }) {
//   return (
//     <form className="container" onSubmit={handleOnClick}>
//       <div className="row">
//         <div className="col-5">
//           <input className={`${addcss.input}`} type="text" placeholder="Enter todo here" onChange={handleTextValue} value={displayValue} />
//         </div>
//         <div className="col-4">
//           <input className={`${addcss.input}`} type="date" name="date" id="date" onChange={handleDate} value={dateValue} />
//         </div>
//         <div className="col-2">
//           <button type="submit" className={`${addcss.button} btn btn-success`} > <IoIosAddCircleOutline /> </button>
//         </div>
//       </div>
//     </form >);
// }

// export default AddToDo      


// For useRef hook demonstration code

import { useRef } from "react";
import addcss from "/Users/akshayshendre/Desktop/react/bootstrap-react/src/css/AddToDo.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";

function AddToDo({ handleTextValue, handleDate, handleOnClick }) {
  return (
    <form className="container" onSubmit={handleOnClick}>
      <div className="row">
        <div className="col-5">
          <input className={`${addcss.input}`} type="text" placeholder="Enter todo here" ref={handleTextValue} />
        </div>
        <div className="col-4">
          <input className={`${addcss.input}`} type="date" name="date" id="date" ref={handleDate} />
        </div>
        <div className="col-2">
          <button type="submit" className={`${addcss.button} btn btn-success`} > <IoIosAddCircleOutline /> </button>
        </div>
      </div>
    </form >);
}

export default AddToDo   