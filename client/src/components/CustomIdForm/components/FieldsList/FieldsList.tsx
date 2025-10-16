import { Droppable, Draggable } from "@hello-pangea/dnd";
import FormatSelector from "../FormatSelector/FormatSelector";
import {
  handleChange,
  handleTypeChange,
  handleAdd,
} from "../../handlers/handlers";

const FieldsList = ({ fields, setFields }) => {
  return (
    <Droppable droppableId="fields">
      {(provided) => (
        <form
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="d-flex flex-column gap-3"
        >
          {fields.map((field, index) => (
            <Draggable
              key={field.id}
              draggableId={String(field.id)}
              index={index}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <FormatSelector
                    type={field.type}
                    value={field.value}
                    onChange={(val) =>
                      setFields((prev) => handleChange(prev, field.id, val))
                    }
                    onTypeChange={(val) =>
                      setFields((prev) => handleTypeChange(prev, field.id, val))
                    }
                  />
                </div>
              )}
            </Draggable>
          ))}

          {provided.placeholder}

          <button
            type="button"
            className="btn btn-outline-primary btn-lg w-100 mb-4"
            onClick={() => setFields((prev) => handleAdd(prev))}
          >
            Add new element
          </button>
        </form>
      )}
    </Droppable>
  );
};

export default FieldsList;
