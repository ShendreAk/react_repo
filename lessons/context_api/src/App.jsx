// for Context_api hook code
import AppName from "./components/AppName";
import AddToDo from "./components/AddTodo";
// import ToDoItem1 from "./components/todoitem1";
// import ToDoItem2 from "./components/todoitem2";
import './css/App.css';
import ToDoItems from "./components/todoitems";
import { useState, useRef } from "react";
import { TodoItemsContext } from "./store/todoItems-store.jsx"


function App() {
  let objectList = [];
  let [toDoItems, setObjList] = useState(objectList);

  const addItems = (newData) => {
    setObjList((currentVal) => [...currentVal, newData]);
    console.log(toDoItems);

  }

  const deleteItems = (item) => {
    let newObjList = [...toDoItems];
    newObjList = newObjList.filter(element => element != item);
    setObjList(newObjList);
  }
  // const valuesToSet = [{ work: 'Go home', Date: 'today' }]
  return (
    <TodoItemsContext.Provider value={{ toDoItems: toDoItems, addItems: addItems, deleteItems: deleteItems }}>
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo ></AddToDo>
        <div className="item-container">
          <ToDoItems ></ToDoItems>
        </div>
      </center>
    </TodoItemsContext.Provider>);

}

export default App;

