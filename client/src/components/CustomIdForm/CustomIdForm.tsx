import { useFormat } from "./hooks/useFormat";
import { useParams } from "react-router-dom";
import { DragDropContext } from "@hello-pangea/dnd";
import { handleDragEnd } from "./handlers/handleDragEnd";
import TrashZone from "./components/TrashZone/TrashZone";
import FieldsList from "./components/FieldsList/FieldsList";
import ExamplePreview from "./components/ExamplePreview/ExamplePreview";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import Header from "./components/Header/Header";
const CustomIdForm = () => {
  const { id } = useParams();
  const { fields, setFields, loading } = useFormat(Number(id));
  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <Header></Header>

      <ExamplePreview fields={fields} />
      {
        //TODO IMPORTANT: CREATE ENDPOINT TO GENERATE CUSTOM_ID PREVIEW ON SERVER
      }

      <DragDropContext
        onDragEnd={(result) => handleDragEnd(result, fields, setFields)}
      >
        <FieldsList fields={fields} setFields={setFields} />

        <TrashZone />
      </DragDropContext>

      <div className="mt-3 d-flex gap-2">
        <SubmitButton id={Number(id)} fields={fields} />
      </div>
    </div>
  );
};

export default CustomIdForm;
