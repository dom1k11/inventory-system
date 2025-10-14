export const handleChange = (fields, id, newValue) =>
  fields.map((field) =>
    field.id === id ? { ...field, value: newValue } : field
  );

export const handleTypeChange = (fields, id, newType) =>
  fields.map((field) =>
    field.id === id
      ? {
          ...field,
          type: newType,
          value:
            newType === "fixed"
              ? ""
              : newType === "sequence"
              ? "D3"
              : "",
        }
      : field
  );

export const handleAdd = (fields) => [
  ...fields,
  { id: Date.now(), type: "fixed", value: "" },
];

export const handleRemove = (fields, id) =>
  fields.filter((f) => f.id !== id);
