const PrefixSelector = ({ value, onChange }) => {
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Prefix (e.g. PR-)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default PrefixSelector;
