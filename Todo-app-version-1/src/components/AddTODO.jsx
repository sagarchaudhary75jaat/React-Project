function AddTODO() {
  return (
    <div className="container">
      <div className="row Kg-row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter TODO Here"
          />
        </div>

        <div className="col-4">
          <input type="date" className="form-control" />
        </div>

        <div className="col-2">
          <button type="button" className="btn btn-success Kg-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTODO;