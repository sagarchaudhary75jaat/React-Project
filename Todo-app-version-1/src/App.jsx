import { useState } from "react";
import AddTODO from "./components/AddTODO";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        duedate: itemDueDate,
      },
    ];

    setTodoItems(newTodoItems);
  };
    const handleDeleteItem=(todoItemName)=>{
      const newTodoItems=todoItems.filter(item=>item.name!==todoItemName)
      setTodoItems(newTodoItems)
      console.log(`Item Deleted:${todoItemName}`)
    }

  return (
    <center className="ToDo">
      <AppName />

      <AddTODO onNewItem={handleNewItem} />
      {todoItems.length===0&&<WelcomeMessage ></WelcomeMessage>}
      <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;