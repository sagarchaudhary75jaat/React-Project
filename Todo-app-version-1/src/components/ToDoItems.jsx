import styles from "./ToDoItems.module.css";
import ToDoItem from "./ToDoItem";
const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem
        key={item.name}
          tododate={item.duedate}
          todoname={item.name}
          onDeleteClick={onDeleteClick}
        ></ToDoItem>
      ))}
    </div>
  );
};
export default ToDoItems;
