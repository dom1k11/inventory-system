export const handleAdd = (fields) => [
  ...fields,
  {
    id: Date.now(),
    field_type: "text_single",
    title: "",
    description: "",
    is_visible: false,
    isNew: true,
  },
];

export const handleTitleChange = (fields, id, newValue) =>
  fields.map((f) => (f.id === id ? { ...f, title: newValue } : f));

export const handleTypeChange = (fields, id, newType) =>
  fields.map((f) => (f.id === id ? { ...f, field_type: newType } : f));

export const handleRemove = (fields, id) => fields.filter((f) => f.id !== id);
