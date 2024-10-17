


import { useRef } from "react";

import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItems-store.jsx"

import addcss from "/Users/akshayshendre/Desktop/react/bootstrap-react/src/css/AddToDo.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";


function AddToDo() {
  const handleTextValue = useRef();
  const handleDate = useRef();
  const { addItems } = useContext(TodoItemsContext);

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    let displayValue = handleTextValue.current.value;
    let dateValue = handleDate.current.value;
    let newData = {
      work: displayValue,
      Date: dateValue
    };
    addItems(newData);
    handleTextValue.current.value = '';
    handleDate.current.value = '';
  };


  return (
    <form className="container" onSubmit={handleAddButtonClicked}>
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