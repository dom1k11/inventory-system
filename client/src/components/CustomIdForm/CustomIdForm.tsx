import { useState } from "react";
import FormSelect from "./FormSelect";

const CustomIdForm = () => {
  const [customId, setCustomId] = useState("");

  return (
    <div className="container mt-4">
      <p className="text-muted">
        You can set up items with inventory numbers in your preferred format. To
        create a format, add new elements, edit them, drag to reorder, or drag
        elements out to delete them.
      </p>

      <p>
        <strong>Example:</strong>{" "}
        <span className="text-secondary">{customId}</span>
      </p>

      <form className="d-flex flex-column gap-3">
        <FormSelect customId={customId} setCustomId={setCustomId}></FormSelect>

        <button type="button" className="btn btn-outline-primary mt-3">
          Add element
        </button>
      </form>
    </div>
  );
};

export default CustomIdForm;
