import { useFormat } from "./hooks/useFormat";
import FormatSelector from "./FormatSelector/FormatSelector";
import { handleChange, handleTypeChange, handleAdd } from "./handlers/handlers";
import { useParams } from "react-router-dom";
import { changeCustomId } from "../../api/customid";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const CustomIdForm = () => {
  const { id } = useParams();
  const { fields, setFields, loading } = useFormat(Number(id));
  if (loading) return <p>Loading...</p>;

  const handleDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!result.destination) return;

    if (destination.droppableId === "trash") {
      setFields((prev) => prev.filter((_, i) => i !== source.index));
      return;
    }

    const updated = Array.from(fields);
    const [moved] = updated.splice(result.source.index, 1);
    updated.splice(result.destination.index, 0, moved);
    setFields(updated);
  };

  const example = fields
    .map((field) => {
      switch (field.type) {
        case "fixed":
          return field.value || "";
        case "random_9":
          return Math.floor(Math.random() * 1_000_000_000)
            .toString()
            .padStart(9, "0");
        case "random_6":
          return Math.floor(Math.random() * 1_000_000)
            .toString()
            .padStart(6, "0");
        case "sequence": {
          const digits = parseInt(field.value.replace("D", ""), 10);
          return "1".padStart(digits, "0");
        }
        case "date":
          return new Date().toISOString().split("T")[0];
        case "20_bit_random": {
          const buf = new Uint32Array(1);
          crypto.getRandomValues(buf);
          return buf[0] & 0xfffff;
        }
        case "32_bit_random": {
          const buf = new Uint32Array(1);
          crypto.getRandomValues(buf);
          return buf[0];
        }
        default:
          return "";
      }
    })
    .join("-");
  //TODO IMPORTANT: CREATE ENDPOINT TO GENERATE CUSTOM_ID PREVIEW ON SERVER

  return (
    <div className="container mt-4">
      <p className="text-muted">
        You can set up items with inventory numbers in your preferred format.
      </p>

      <h2>
        <strong>Example:</strong>{" "}
        <span className="text-secondary">{example}</span>
      </h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="fields">
          {(provided) => (
            <form
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="d-flex flex-column gap-3"
            >
              {fields.map((f, index) => (
                <Draggable key={f.id} draggableId={String(f.id)} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <FormatSelector
                        label={f.type}
                        type={f.type}
                        value={f.value}
                        onChange={(val) =>
                          setFields((prev) => handleChange(prev, f.id, val))
                        }
                        onTypeChange={(val) =>
                          setFields((prev) => handleTypeChange(prev, f.id, val))
                        }
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </form>
          )}
        </Droppable>
        <Droppable droppableId="trash">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="trash-zone border border-danger p-3 rounded text-center"
            >
              Drop here to delete {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="mt-3 d-flex gap-2">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setFields((prev) => handleAdd(prev))}
        >
          Add element
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => changeCustomId(Number(id), fields)}
        >
          Submit Custom ID
        </button>
      </div>
    </div>
  );
};

export default CustomIdForm;
