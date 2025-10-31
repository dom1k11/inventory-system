import { Droppable, Draggable } from "@hello-pangea/dnd";
import TypeSelector from "../TypeSelector/TypeSelector";
import TitleInput from "../TitleInput/TitleInput";
import Checkbox from "../Checkbox/Checkbox";
import { handleTitleChange, handleTypeChange } from "../../handlers/handlers";

const FieldsList = ({ fields, setFields }) => {
  return (
    <Droppable droppableId="fields">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {fields.map((field, index) => (
            <Draggable key={field.id} draggableId={String(field.id)} index={index}>
              {(provided) => (
                <div
                  className="card p-3 mb-3 shadow-sm"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
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
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default FieldsList;
