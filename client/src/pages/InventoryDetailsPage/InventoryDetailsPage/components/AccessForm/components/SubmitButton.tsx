import { useState } from "react";
const SubmitButton = ({ onClick }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = async (e) => {
    await onClick(e);
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
