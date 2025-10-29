import { useNavigate } from "react-router-dom";
import { getUser } from "../../helpers/auth";
import "./Header.css";

const Header = ({ title = "" }) => {
  const navigate = useNavigate();
  const user = getUser();

  return (
    <header className="app-header">
      <button onClick={() => navigate("/inventories")} className="btn btn-primary">
        Home
      </button>

      <h1>{title}</h1>
      <h2>
        {" "}
        {user && (
          <span className="user-info">
            {user.email} ({user.role})
          </span>
        )}
      </h2>

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
