import { isLoggedIn } from "../../../../../helpers/auth";
const ToolbarButton = ({ onClick, label, variant, disabled }) => {
  if (!isLoggedIn()) return null;

  <button onClick={onClick} className={`btn ${variant}`} disabled={disabled}>
    {label}
  </button>;
};
export default ToolbarButton;
