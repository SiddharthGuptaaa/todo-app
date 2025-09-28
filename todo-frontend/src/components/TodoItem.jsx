import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function TodoItem({ todoName, todoDate}) {
  const {deleteItem}=useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row sg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sg-button" onClick={()=>deleteItem(todoName)}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
