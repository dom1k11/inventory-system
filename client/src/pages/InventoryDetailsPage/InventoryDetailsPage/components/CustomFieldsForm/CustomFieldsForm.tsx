import Header from "./components/Header/Header";
import "./CustomFieldsForm.css";
import { useParams } from "react-router-dom";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import { useFields } from "./hooks/useFields";
import NewElementBtn from "./components/NewElementBtn/NewElementBtn";
import FieldsList from "./components/FieldsList/FieldsList";
import { DragDropContext } from "@hello-pangea/dnd";
import { handleDragEnd } from "../../../../../components/CustomIdForm/handlers/handleDragEnd";
import TrashZone from "../../../../../components/CustomIdForm/components/TrashZone/TrashZone";
import { deleteCustomField } from "../../../../../api/inventories";
import { useState } from "react";

const CustomFieldsForm = ({ loadItems }) => {
  const { id } = useParams();
  const { fields, loading, setFields } = useFields(Number(id));
  const [trash, setTrash] = useState<any[]>([]);
  if (loading) return <p>Loading...</p>;

  const handleDnd = (result) => {
    const { source, destination } = result;
    if (destination.droppableId === "trash") {
      const deleted = fields[source.index];
      setTrash((prev) => [...prev, deleted]);
    }
    handleDragEnd(result, fields, setFields);
  };

  async function confirmDelete() {
    const ids = trash.map((f) => f.id);
    await deleteCustomField(Number(id), ids);
    await loadItems();
    setTrash([]);
  }
  return (
    <div className="custom-fields-container">
      <Header />
      <br></br>
      <DragDropContext onDragEnd={handleDnd}>
        <FieldsList fields={fields} setFields={setFields} />
        <TrashZone />
      </DragDropContext>
      <br></br>
      <NewElementBtn setFields={setFields} />
      <SubmitButton id={Number(id)} fields={fields} />
      <div className="mt-3 d-flex gap-2">
        <button
          onClick={confirmDelete}
          disabled={trash.length === 0}
          className="btn btn-danger btn-lg w-50 mx-auto"
        >
          Confirm Delete ({trash.length})
        </button>
      </div>
    </div>
  );
};

export default CustomFieldsForm;
