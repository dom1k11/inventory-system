import { useState } from "react";
import { addCustomField } from "../../../../../../../api/inventories";

const SubmitButton = ({ id, fields }) => {
  const [isSaved, setIsSaved] = useState(false);
  const newFields = fields.filter((f) => f.isNew);
  if (newFields.length === 0) return;

  const handleClick = async () => {
    await addCustomField(id, newFields);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="mt-3 d-flex gap-2">
      <button
        type="button"
        className={`btn btn-lg w-50 mx-auto ${isSaved ? "btn-outline-success" : "btn-success"}`}
        onClick={handleClick}
        disabled={isSaved}
      >
        {isSaved ? "Changes Saved ✓" : "Save Changes"}
      </button>
    </div>
  );
};

export default SubmitButton;
