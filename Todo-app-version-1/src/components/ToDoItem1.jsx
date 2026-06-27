function ToDoItem1() {
  let todoname = "Buy Milk";
  let tododate = "4/10/2026";

  return (
    <div className="container">
      <div className="row Kg-row">
        <div className="col-6">{todoname}</div>

        <div className="col-4">{tododate}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger Kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem1;