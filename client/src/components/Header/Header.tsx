import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = ({ title = "" }) => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <button
        onClick={() => navigate("/inventories")}
        className="btn btn-primary"
      >
        Home
      </button>
      <h1>{title}</h1>

      <button
        className="btn btn-outline-secondary"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
