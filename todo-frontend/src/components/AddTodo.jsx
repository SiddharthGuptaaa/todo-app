import { useRef} from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";


function AddTodo() {

  const {addNewItem}=useContext(TodoItemsContext);
  const todoNameElement=useRef();
  const dueDateElement=useRef();
  
  const handleAddButtonClicked =(event)=>{
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    addNewItem(todoName,dueDate);
    
  }

  return (
    <div className="container text-center">
      <form className="row sg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" 
          ref={todoNameElement}
          placeholder="Enter Todo Here" ></input>
        </div>
        <div className="col-4">
          <input type="date" 
          ref={dueDateElement}></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success sg-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
