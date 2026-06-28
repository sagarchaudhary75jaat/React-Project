import ToDoItem from "./ToDoItem"
const ToDoItems=({todoItems})=>{
    return( <div className="itemContainer">
        {todoItems.map(item=> <ToDoItem tododate={item.duedate} todoname={item.name}></ToDoItem>)}
        
        
      </div>
    
)
}
export default ToDoItems