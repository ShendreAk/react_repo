import ToDoItem from "./todoitem";
import { useContext } from "react";
import { TodoItemsContext } from "/Users/akshayshendre/Desktop/react/lessons/context_api/src/store/todoItems-store.jsx";


function ToDoItems() {
  const { toDoItems } = useContext(TodoItemsContext);
  // console.log(toDoItems);
  return toDoItems.map((item) => <ToDoItem key={item.work} item={item} ></ToDoItem>)

}
export default ToDoItems