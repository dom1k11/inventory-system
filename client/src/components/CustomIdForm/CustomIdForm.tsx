import { useFormat } from "./hooks/useFormat";
import FormatSelector from "./FormatSelector/FormatSelector";
import {
  handleChange,
  handleTypeChange,
  handleAdd,
  handleRemove,
} from "./handlers/handlers";
import { useParams } from "react-router-dom";
import { changeCustomId } from "../../api/customid";

const CustomIdForm = () => {
  const { id } = useParams();
  const { fields, setFields, loading } = useFormat(Number(id));
  if (loading) return <p>Loading...</p>;

  const example = fields
    .map((field) => {
      console.log("FIELD TYPE:", field.type);

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
          console.log(buf);

          return buf[0] & 0xfffff;
        }
        case "32_bit_random": {
          const buf = new Uint32Array(1);
          crypto.getRandomValues(buf);
          console.log(buf);
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
          onClick={() => changeCustomId(Number(id), fields)}
        >
          Submit Custom ID
        </button>
      </form>
    </div>
  );
};

export default CustomIdForm;
