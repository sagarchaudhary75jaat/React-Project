import AddTODO from "./components/AddTODO";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
function App() {

const todoItems = [
  {
    name: "Buy Milk",
    duedate: "4/7/2026",
  },
  {
    name: "Go To College",
    duedate: "4/7/2026",
  },
  {
    name: "Hello World",
    duedate: "right now",
  },
 
];
  return (
    <center className="ToDo">
      <AppName />
      <AddTODO />
      <ToDoItems  todoItems={todoItems}></ToDoItems>
      
      
    </center>
  );
}

export default App;