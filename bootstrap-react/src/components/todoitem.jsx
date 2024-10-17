import styles from '/Users/akshayshendre/Desktop/react/bootstrap-react/src/css/todoitem.module.css';
import { MdDelete } from "react-icons/md";

function ToDoItem({ item, handleDelete }) {
  return <div className="container">
    <div className="row">
      <div className="col-5">
        {item.work}
      </div>
      <div className="col-4">
        {item.Date}
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(item)}><MdDelete /></button>
      </div>
    </div>
  </div>
}
export default ToDoItem;