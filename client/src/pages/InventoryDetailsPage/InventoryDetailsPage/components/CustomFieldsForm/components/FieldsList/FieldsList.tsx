import TypeSelector from "../TypeSelector/TypeSelector";
import TitleInput from "../TitleInput/TitleInput";
import Checkbox from "../Checkbox/Checkbox";
import {
  handleRemove,
  handleTitleChange,
  handleTypeChange,
} from "../../handlers/handlers";
import { deleteCustomField } from "../../../../../../../api/inventories";

const FieldsList = ({ id, fields, setFields }) => {
  const handleDelete = async (fieldId: number) => {
    setFields((prev) => handleRemove(prev, fieldId));
    await deleteCustomField(Number(id), [fieldId]);
  };

  return (
    <>
      {fields.map((field) => (
        <div key={field.id} className="card p-3 mb-3 shadow-sm">
          <div className="row g-3 align-items-center">
            <TypeSelector
              field={field}
              onChange={(newType) =>
                setFields((prev) => handleTypeChange(prev, field.id, newType))
              }
            />
            <TitleInput
              field={field}
              onChange={(value) =>
                setFields((prev) => handleTitleChange(prev, field.id, value))
              }
            />
            <Checkbox />
          </div>

          <button
            className="btn btn-danger mt-2"
            onClick={() => handleDelete(field.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default FieldsList;
