import { isLoggedIn } from "../../../../helpers/auth";
const ToolbarButton = ({ onClick, label, variant, disabled }) => {
  if (!isLoggedIn()) return null;

  return (
    <button onClick={onClick} className={`btn ${variant}`} disabled={disabled}>
      {label}
    </button>
  );
};

export default ToolbarButton;
