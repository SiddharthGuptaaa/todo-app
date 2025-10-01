import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';


const TodoItems =()=>{
  const {todoItems}=useContext(TodoItemsContext);
  console.log(todoItems);
  

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item)=>(
        <TodoItem key={item.id} todoName={item.task} todoDate={item.dueDate} ></TodoItem>
      ))}
      
      
    </div>
  )
}

export default TodoItems;