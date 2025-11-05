import { useState } from "react";
import { addInventory } from "../../../../api/inventories";
import { validateForm } from "../../../../utils/validation/validateForm";
import { inventorySchema } from "../../../../utils/validation/inventorySchemas";
const AddInventoryForm = ({ onCreated, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { valid, errors, data } = validateForm(inventorySchema, formData);
    if (!valid) {
      setErrors(errors);
      return;
    }

    try {
      await addInventory(data.title, data.description, data.category);
      if (onCreated) await onCreated();
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        if (onClose) onClose();
      }, 1000);
    } catch (err) {
      console.error("Inventory creation failed", err);
    }
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
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <p className="text-danger">{errors.title[0]}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <p className="text-danger">{errors.description[0]}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          value={formData.category}
          onChange={handleChange}
        />
        {errors.category && <p className="text-danger">{errors.category[0]}</p>}
      </div>

      <button
        type="submit"
        className={`btn w-100 ${isSubmitted ? "btn-outline-success" : "btn-success"}`}
        disabled={isSubmitted}
      >
        {isSubmitted ? "Created ✓" : "Create Inventory"}
      </button>
    </form>
  );
};

export default AddInventoryForm;
