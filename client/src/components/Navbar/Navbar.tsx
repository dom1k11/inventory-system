import NavbarButton from "./NavbarButton";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      <div className="btn-toolbar-left">
        <NavbarButton
          onClick={() => {}}
          label="Delete"
          variant="btn-danger"
          disabled={!false}
        />
        <NavbarButton
          onClick={() => {}}
          label="Edit"
          variant="btn-warning"
          disabled={!false}
        />
      </div>

      <div className="btn-toolbar-right">
        <NavbarButton
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          label="Log out"
          variant="btn btn-outline-secondary"
          disabled={false}
        />
      </div>
    </nav>
  );
};

export default Navbar;
