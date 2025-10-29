import { sequenceOptions } from "../../../consts/sequenceOptions";
const SequenceSelector = ({ value, onChange }) => {
  return (
    <select className="form-select" value={value} onChange={(e) => onChange(e.target.value)}>
      {sequenceOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SequenceSelector;
