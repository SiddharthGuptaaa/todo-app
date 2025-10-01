import {createContext, useReducer} from "react";
import { addItemToServer } from "../../services/itemsService";
import { useEffect } from "react";

export const TodoItemsContext=createContext({todoItems:{},
addNewItem:()=>{},
deleteItem:()=>{}}

);



const todoItemsReducer=(currTodoItems,action)=>{
  
  let newTodoItems=currTodoItems
  if(action.type==="NEW_ITEM"){
    newTodoItems=
      [...currTodoItems,action.payload.item];
  }
  else if(action.type==="DELETE_ITEM"){
    newTodoItems = currTodoItems.filter(item => item.name !== action.payload.itemName);
      

  }
  return newTodoItems;
}

const TodoItemsContextProvider=({children})=>{

  


  const [todoItems, dispatchTodoItems]= useReducer(todoItemsReducer,[]);
  const addNewItem=async (itemName,itemDueDate)=>{
    const item = await addItemToServer(itemName, itemDueDate);

    
    const newItemAction={
      type:"NEW_ITEM",
      payload: {item},
    }
    dispatchTodoItems(newItemAction);
    
    
    
     }
     

    const deleteItem=(todoItemName)=>{
      
      const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{itemName:todoItemName}
    }
    dispatchTodoItems(deleteItemAction);
      
    }
    return (
      
      <TodoItemsContext.Provider value={{todoItems,
      addNewItem,
      deleteItem,
    }}>
      {children}
    </TodoItemsContext.Provider>
    
    )
}

export default TodoItemsContextProvider;