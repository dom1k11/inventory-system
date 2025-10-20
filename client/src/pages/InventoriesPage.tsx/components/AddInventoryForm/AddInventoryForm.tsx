const AddInventoryForm = () => {
  return (
    <form className="p-4 border rounded bg-light">
      <h4 className="mb-3">Add New Inventory</h4>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Notebooks"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows={3}
          placeholder="List of Notebooks"
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          placeholder="Equipment"
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        Create Inventory
      </button>
    </form>
  );
};

export default AddInventoryForm;
