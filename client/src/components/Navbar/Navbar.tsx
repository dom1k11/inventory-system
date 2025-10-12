import NavbarButton from "./NavbarButton";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

type NavbarProps = {
  activeTab: "items" | "fields" | "customId";
  setActiveTab: (tab: "items" | "fields" | "customId") => void;
};

const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      <div className="btn-toolbar-left">
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
