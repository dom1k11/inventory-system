import { useState } from "react";

const CustomIdForm = () => {
  const [fixed, setFixed] = useState("PR-");
  const [random] = useState(() =>
    Math.floor(Math.random() * 1_000_000_000)
      .toString()
      .padStart(9, "0")
  );
  const [sequenceFormat, setSequenceFormat] = useState("D3");

  const previewSequence = () => {
    const digits = parseInt(sequenceFormat.replace("D", ""), 10);
    return "1".padStart(digits, "0");
  };

  const example = `${fixed}${random}-${previewSequence()}`;

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
        {/* Fixed */}
        <div className="row g-2 align-items-center border rounded p-2">
          <div className="col-md-3">
            <select className="form-select" value="Fixed" disabled>
              <option>Fixed</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="PR-"
              value={fixed}
              onChange={(e) => setFixed(e.target.value)}
            />
          </div>
          <div className="col-md-3 text-end"></div>
          <small className="text-muted">
            A piece of unchanging text. You can use Unicode emoji.
          </small>
        </div>

        {/* Random */}
        <div className="row g-2 align-items-center border rounded p-2">
          <div className="col-md-3">
            <select className="form-select" value="9-digit random" disabled>
              <option>9-digit random</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              disabled
              type="text"
              className="form-control"
              placeholder="D9"
              value={random}
              readOnly
            />
          </div>
          <div className="col-md-3 text-end"></div>
          <small className="text-muted">Random number (e.g. 237898742)</small>
        </div>

        {/* Sequence */}
        <div className="row g-2 align-items-center border rounded p-2">
          <div className="col-md-3">
            <select className="form-select" value="Sequence" disabled>
              <option>Sequence</option>
            </select>
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={sequenceFormat}
              onChange={(e) => setSequenceFormat(e.target.value)}
            >
              <option value="D">D (1)</option>
              <option value="D2">D2 (01)</option>
              <option value="D3">D3 (001)</option>
              <option value="D4">D4 (0001)</option>
              <option value="D5">D5 (00001)</option>
            </select>
          </div>
          <div className="col-md-3 text-end"></div>
          <small className="text-muted">
            Defines number of leading zeros for sequential numbering.
          </small>
        </div>
      </form>
    </div>
  );
};

export default CustomIdForm;
