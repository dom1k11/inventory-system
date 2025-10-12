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
    </header>
  );
};

export default Header;
