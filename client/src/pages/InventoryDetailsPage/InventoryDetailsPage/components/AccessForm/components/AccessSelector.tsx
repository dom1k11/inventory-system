const AccessSelector = ({ onChange }) => {
  return (
    <select
      className="form-control"
      defaultValue="false"
      onChange={(e) => onChange(e.target.value === "true")}
    >
      <option value="false">Read Only</option>
      <option value="true">Write Access</option>
    </select>
  );
};

export default AccessSelector;
