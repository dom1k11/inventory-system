import { useFormat } from "./hooks/useFormat";
import { useParams } from "react-router-dom";
import { DragDropContext } from "@hello-pangea/dnd";
import { handleDragEnd } from "./handlers/handleDragEnd";
import TrashZone from "./components/TrashZone/TrashZone";
import FieldsList from "./components/FieldsList/FieldsList";
import ExamplePreview from "./components/ExamplePreview/ExamplePreview";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import Header from "./components/Header/Header";
import "./CustomIdForm.css";
import { useEffect, useState } from "react";
import { fetchCustomIdPreview } from "../../api/customid";
const CustomIdForm = () => {
  const { id } = useParams();
  const { fields, setFields, loading } = useFormat(Number(id));
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (loading) return;
    async function loadPreview() {
      const preview = await fetchCustomIdPreview(Number(id), fields);
      setPreview(preview);
    }
    loadPreview();
  }, [id, fields, loading]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="custom-id-container" id="custom-id-form">
      <Header></Header>
      <ExamplePreview preview={preview} />
      <DragDropContext onDragEnd={(result) => handleDragEnd(result, fields, setFields)}>
        <FieldsList fields={fields} setFields={setFields} />
        <TrashZone />
      </DragDropContext>

      <SubmitButton id={Number(id)} fields={fields} />
    </div>
  );
};

export default CustomIdForm;
