import { useState } from "react";
import { addInventory } from "../../../../api/inventories";

const AddInventoryForm = ({ onCreated, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    created_by: 1,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addInventory(
      formData.title,
      formData.description,
      formData.category,
      formData.created_by
    );
    if (onCreated) await onCreated();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      if (onClose) onClose();
    }, 1000);
  }

  return (
    <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
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
          value={formData.title}
          onChange={handleChange}
          required
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
          value={formData.description}
          onChange={handleChange}
          required
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
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className={`btn w-100 ${
          isSubmitted ? "btn-outline-success" : "btn-success"
        }`}
        disabled={isSubmitted}
      >
        {isSubmitted ? "Created ✓" : "Create Inventory"}
      </button>
    </form>
  );
};

export default AddInventoryForm;
