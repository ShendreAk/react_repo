// for useRef hook code
import AppName from "./components/AppName";
import AddToDo from "./components/AddTodo";
// import ToDoItem1 from "./components/todoitem1";
// import ToDoItem2 from "./components/todoitem2";
import './css/App.css';
import ToDoItems from "./components/todoitems";
import { useState, useRef } from "react";


function App() {
  let objectList = [];
  let [objList, setObjList] = useState(objectList);


  const handleTextValue = useRef();
  const handleDate = useRef();

  const handleOnClick = (event) => {
    // console.log(event);
    event.preventDefault();
    let displayValue = handleTextValue.current.value;
    let dateValue = handleDate.current.value;
    let newData = {
      work: displayValue,
      Date: dateValue
    }

    // Functional update for state updateion from previous state
    setObjList((currentVal) => [...currentVal, newData]);
    handleTextValue.current.value = '';
    handleDate.current.value = '';
  }
  const handleDelete = (item) => {
    let newObjList = [...objList];
    newObjList = newObjList.filter(element => element != item);
    console.log(newObjList);
    console.log(item);

    setObjList(newObjList);
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo handleTextValue={handleTextValue} handleDate={handleDate} handleOnClick={handleOnClick}></AddToDo>
      <div className="item-container">
        <ToDoItems items={objList} handleDelete={handleDelete}></ToDoItems>
      </div>


    </center>);

}

export default App;

