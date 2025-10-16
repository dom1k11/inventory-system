import { fieldOptions } from "../../consts/fieldOptions";

const TypeSelector = (field) => {
  return (
    <div className="col-md-3">
      <label className="form-label">Type</label>
      <select
        className="form-select"
        value={field.field_type}
      >
        {fieldOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeSelector;
