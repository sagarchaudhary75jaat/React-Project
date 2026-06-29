import styles from"./ToDoItems.module.css"
import ToDoItem from "./ToDoItem"
const ToDoItems=({todoItems})=>{
    return( <div className={styles.itemsContainer}>
        {todoItems.map(item=> <ToDoItem tododate={item.duedate} todoname={item.name}></ToDoItem>)}
        
        
      </div>
    
)
}
export default ToDoItems