import { handleAdd } from "../../handlers/handlers";
const NewElementBtn = ({setFields}) => {


  return (
    <button
      type="button"
      className="btn btn-outline-primary btn-lg w-100 mb-4"
      onClick={() => setFields((prev) => handleAdd(prev))}
    >
      Add new element
    </button>
  );
};

export default NewElementBtn;
