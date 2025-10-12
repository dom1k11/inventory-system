const FormSelect = ({customId, setCustomId}) => {
  return (
    <div className="row g-2 align-items-center border rounded p-2">
      <div className="col-md-3">
        <select className="form-select">
          <option disabled>Fixed</option>
          <option>20-bit random</option>
          <option>32-bit random</option>
          <option>6-digit random</option>
          <option>9-digit random</option>
          <option>Sequence</option>
          <option>Date/time</option>
          <option>GUID</option>
        </select>
      </div>
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="-"
          value={customId}
          onChange={(e) => setCustomId(e.target.value)}
        />
      </div>
      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-danger btn-sm">
          Remove
        </button>
      </div>
      <small className="text-muted">
        A piece of unchanging text. You can use Unicode emoji.
      </small>
    </div>
  );
};

export default FormSelect;
