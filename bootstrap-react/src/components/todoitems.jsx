import ToDoItem from "./todoitem"
function ToDoItems({ items, handleDelete }) {
  return items.map((item) => <ToDoItem key={item.work} item={item} handleDelete={handleDelete} ></ToDoItem>)

}
export default ToDoItems