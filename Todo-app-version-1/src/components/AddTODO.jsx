import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTODO({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    // Prevent adding empty todos
    if (todoName.trim() === "" || dueDate === "") {
      alert("Please enter both TODO and due date.");
      return;
    }

    onNewItem(todoName, dueDate);

    // Clear the input fields
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row Kg-row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter TODO Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success Kg-button"
            onClick={handleAddButtonClicked}
          >
         <BiMessageAdd/>

          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTODO;