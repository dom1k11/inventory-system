import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="app-header">
      <button
        onClick={() => navigate("/inventories")}
        className="btn btn-primary"
      >
        Home
      </button>
      <h1>Inventory System</h1>
    </header>
  );
};

export default Header;
