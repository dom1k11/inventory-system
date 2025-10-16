export function handleDragEnd(result, fields, setFields) {
  const { source, destination } = result;
  if (!destination) return;

  if (destination.droppableId === "trash") {
    setFields((prev) => prev.filter((_, i) => i !== source.index));
    return;
  }

  const updated = Array.from(fields);
  const [moved] = updated.splice(source.index, 1);
  updated.splice(destination.index, 0, moved);
  setFields(updated);
}
