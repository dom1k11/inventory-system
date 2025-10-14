import { useState } from "react";
import FormatSelector from "./FormatSelector/FormatSelector";
import {
  handleChange,
  handleTypeChange,
  handleAdd,
  handleRemove,
} from "./handlers/handlers";

const CustomIdForm = () => {
  const [fields, setFields] = useState([
    { id: 1, type: "fixed", value: "PR" },
    { id: 2, type: "random_9", value: "" },
    { id: 3, type: "sequence", value: "D3" },
  ]);

  const example = fields
    .map((f) => {
      switch (f.type) {
        case "fixed":
          return f.value || "";
        case "random_9":
          return Math.floor(Math.random() * 1_000_000_000)
            .toString()
            .padStart(9, "0");
        case "sequence": {
          const digits = parseInt(f.value.replace("D", ""), 10);
          return "1".padStart(digits, "0");
        }
        case "date":
          return new Date().toISOString().split("T")[0];
        case "random_6":
          return Math.floor(Math.random() * 1_000_000)
            .toString()
            .padStart(6, "0");
        default:
          return "";
      }
    })
    .join("-");

  return (
    <div className="container mt-4">
      <p className="text-muted">
        You can set up items with inventory numbers in your preferred format.
      </p>

      <h2>
        <strong>Example:</strong>{" "}
        <span className="text-secondary">{example}</span>
      </h2>

      <form className="d-flex flex-column gap-3">
        {fields.map((f) => (
          <FormatSelector
            key={f.id}
            label={f.type}
            type={f.type}
            value={f.value}
            onChange={(val) =>
              setFields((prev) => handleChange(prev, f.id, val))
            }
            onTypeChange={(val) =>
              setFields((prev) => handleTypeChange(prev, f.id, val))
            }
            onRemove={() => setFields((prev) => handleRemove(prev, f.id))}
          />
        ))}

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
          onClick={() => console.log({ fields })}
        >
          Submit Custom ID
        </button>
      </form>
    </div>
  );
};

export default CustomIdForm;
