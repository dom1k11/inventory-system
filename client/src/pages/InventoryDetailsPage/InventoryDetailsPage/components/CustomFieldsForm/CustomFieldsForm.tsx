import Header from "./components/Header/Header";
import "./CustomFieldsForm.css";
import { useParams } from "react-router-dom";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import { useFields } from "./hooks/useFields";
import NewElementBtn from "./components/NewElementBtn/NewElementBtn";
import FieldsList from "./components/FieldsList/FieldsList";

const CustomFieldsForm = () => {
  const { id } = useParams();
  const { fields, loading, setFields } = useFields(Number(id));

  if (loading) return <p>Loading...</p>;

  return (
    <div className="custom-fields-container">
      <Header />

      <FieldsList id={id} fields={fields} setFields={setFields} />

      <NewElementBtn setFields={setFields}></NewElementBtn>
      <SubmitButton id={Number(id)} fields={fields} />
    </div>
  );
};

export default CustomFieldsForm;
