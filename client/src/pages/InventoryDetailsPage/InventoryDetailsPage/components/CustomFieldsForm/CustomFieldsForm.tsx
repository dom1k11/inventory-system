import Header from "./components/Header/Header";
import "./CustomFieldsForm.css";
import { useParams } from "react-router-dom";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import Checkbox from "./components/Checkbox/Checkbox";
import TitleInput from "./components/TitleInput/TitleInput";
import TypeSelector from "./components/TypeSelector/TypeSelector";
import { useFields } from "./hooks/useFields";
import NewElementBtn from "./components/NewElementBtn/NewElementBtn";
import {
  handleRemove,
  handleTitleChange,
  handleTypeChange,
} from "./handlers/handlers";
import { deleteCustomField } from "../../../../../api/inventories";
const CustomFieldsForm = () => {
  const { id } = useParams();
  const { fields, loading, setFields } = useFields(Number(id));

  if (loading) return <p>Loading...</p>;

  return (
    <div className="custom-fields-container">
      <Header />
      {fields.map((field) => (
        <div key={field.id} className="card p-3 mb-3 shadow-sm">
          <div className="row g-3 align-items-center">
            <TypeSelector
              field={field}
              onChange={(newType) =>
                setFields((prev) => handleTypeChange(prev, field.id, newType))
              }
            />{" "}
            <TitleInput
              field={field}
              onChange={(value) =>
                setFields((prev) => handleTitleChange(prev, field.id, value))
              }
            />{" "}
            <Checkbox />
          </div>
          <button
            className="btn btn-danger mt-2"
            onClick={async () => {
              setFields((prev) => handleRemove(prev, field.id));
              await deleteCustomField(Number(id), [field.id]);
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <NewElementBtn setFields={setFields}></NewElementBtn>
      <SubmitButton id={Number(id)} fields={fields} />
    </div>
  );
};

export default CustomFieldsForm;
