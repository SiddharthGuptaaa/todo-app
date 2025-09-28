import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WlecomeMessage.jsx";
import TodoItems from "./components/TodoItems.jsx";
import "./App.css";

import TodoItemsContextProvider from "./store/todo-items-store.jsx";


function App() {
  
  // const [todoItems,setTodoItems]=useState([]);
  
    // const defaultTodoItems=[{name:"Buy Ghee",dueDate:"Today"}];
  return (
    <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
       <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
        
      
    </center>
   </TodoItemsContextProvider>
  );
}

export default App;
