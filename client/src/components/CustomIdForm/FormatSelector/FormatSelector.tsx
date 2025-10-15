import { typeOptions } from "../consts/typeOptions";
import PrefixSelector from "./Selectors/PrefixSelector";
import Random9Selector from "./Selectors/Random9Selector";
import Random6Selector from "./Selectors/Random6Selector";
import SequenceSelector from "./Selectors/SequenceSelector";
import DateSelector from "./Selectors/DateSelector";
import Bit20Selector from "./Selectors/bit20Selector";
import Bit32Selector from "./Selectors/bit32Selector";
const FormatSelector = ({ type, value, onChange, onTypeChange }) => {
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

      <div className="col-md-8">
        {type === "fixed" && (
          <PrefixSelector value={value} onChange={onChange}></PrefixSelector>
        )}

        {type === "random_9" && <Random9Selector></Random9Selector>}
        {type === "random_6" && <Random6Selector></Random6Selector>}

        {type === "sequence" && (
          <SequenceSelector
            value={value}
            onChange={onChange}
          ></SequenceSelector>
        )}

        {type === "date" && <DateSelector></DateSelector>}
        {type === "20_bit_random" && <Bit20Selector></Bit20Selector>}
        {type === "32_bit_random" && <Bit32Selector></Bit32Selector>}
      </div>
    </div>
  );
};

export default FormatSelector;
