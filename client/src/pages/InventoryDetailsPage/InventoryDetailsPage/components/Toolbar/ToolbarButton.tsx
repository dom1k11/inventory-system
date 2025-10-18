const ToolbarButton = ({ onClick, label, variant, disabled }) => (
  <button onClick={onClick} className={`btn ${variant}`} disabled={disabled}>
    {label}
  </button>
);

export default ToolbarButton;
