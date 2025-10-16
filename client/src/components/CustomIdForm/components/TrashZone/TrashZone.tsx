import { Droppable } from "@hello-pangea/dnd";

const TrashZone = () => {
  return (
    <Droppable droppableId="trash">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="trash-zone border border-danger p-3 rounded text-center"
        >
          <b>Drop here to delete</b> {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TrashZone;
