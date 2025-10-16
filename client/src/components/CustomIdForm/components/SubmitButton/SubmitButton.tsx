import { changeCustomId } from "../../../../api/customid";

const SubmitButton = ({ id, fields }) => {
  const handleClick = () => {
    changeCustomId(id, fields);
  };

  return (
    <div className="mt-3 d-flex gap-2">
      <button
        type="button"
        className="btn btn-success btn-lg w-100 mb-4"
        onClick={handleClick}
      >
        Save Changes
      </button>
    </div>
  );
};

export default SubmitButton;
