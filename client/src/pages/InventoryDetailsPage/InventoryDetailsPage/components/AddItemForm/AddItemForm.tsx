import { useState } from "react";

const AddItemForm = ({ onCreated, onClose }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // await addInventory(
    //   formData.title,
    //   formData.description,
    //   formData.category,
    //   formData.created_by
    // );
    if (onCreated) await onCreated();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      if (onClose) onClose();
    }, 1000);
  }

  return (
    <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
      <h4 className="mb-3">Add New Item</h4>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Brand
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="E.g. (Canon)"
          value={""}
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
        {isSubmitted ? "Created ✓" : "Create Item"}
      </button>
    </form>
  );
};

export default AddItemForm;
