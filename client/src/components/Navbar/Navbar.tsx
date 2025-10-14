import NavbarButton from "./NavbarButton";
import { useNavigate, useParams } from "react-router-dom";
import { handleAdd } from "../../services/itemAddHandler";
import "./Navbar.css";

const Navbar = ({ activeTab, setActiveTab, loadItems }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <nav className="navbar-container">
      <div className="btn-toolbar-left">
        <NavbarButton
          onClick={async () => {
            await handleAdd(Number(id));
            await loadItems();
          }}
          label="New Item"
          variant="btn btn-success"
        />
        <NavbarButton
          onClick={() => setActiveTab("items")}
          label="Items"
          variant={
            activeTab === "items"
              ? "btn btn-primary"
              : "btn btn-outline-primary"
          }
        />
        <NavbarButton
          onClick={() => setActiveTab("fields")}
          label="Fields"
          variant={
            activeTab === "fields"
              ? "btn btn-primary"
              : "btn btn-outline-primary"
          }
        />
        <NavbarButton
          onClick={() => setActiveTab("customId")}
          label="Custom ID"
          variant={
            activeTab === "customId"
              ? "btn btn-primary"
              : "btn btn-outline-primary"
          }
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
        />
      </div>
    </nav>
  );
};

export default Navbar;
