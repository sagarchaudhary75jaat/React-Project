function ToDoItem({todoname,tododate,onDeleteClick}) {
 

  return (
    <div className="container">
      <div className="row Kg-row">
        <div className="col-6">{todoname}</div>

        <div className="col-4">{tododate}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger Kg-button" onClick={()=>onDeleteClick(todoname)} >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;