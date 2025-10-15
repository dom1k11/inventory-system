import { typeOptions } from "../consts/typeOptions";
import { sequenceOptions } from "../consts/sequenceOptions";
const FormatSelector = ({ type, value, onChange, onTypeChange, onRemove }) => {
  return (
    <div className="row g-2 align-items-center border rounded p-2">
      <div className="col-md-3">
        <select
          className="form-select"
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          {typeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-6">
        {type === "fixed" && (
          <input
            type="text"
            className="form-control"
            placeholder="Prefix (e.g. PR-)"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}

        {type === "random_9" && (
          <input
            disabled
            type="text"
            className="form-control"
            value="Random 9-digit"
          />
        )}
        {type === "random_6" && (
          <input
            disabled
            type="text"
            className="form-control"
            value="Random 6-digit"
          />
        )}

        {type === "sequence" && (
          <select
            className="form-select"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            {sequenceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}

        {type === "date" && (
          <input
            disabled
            type="text"
            className="form-control"
            value="YYYY-MM-DD"
          />
        )}
         {type === "20_bit_random" && (
          <input
            disabled
            type="text"
            className="form-control"
            value="Random 20-bit"
          />
        )}
         {type === "32_bit_random" && (
          <input
            disabled
            type="text"
            className="form-control"
            value="Random 32-bit"
          />
        )}
      </div>

      <div className="col-md-3 text-end">
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FormatSelector;
