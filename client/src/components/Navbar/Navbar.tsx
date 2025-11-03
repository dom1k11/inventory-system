import NavbarButton from "./NavbarButton";
import "./Navbar.css";
import { isOwner } from "../../helpers/auth";

const Navbar = ({ activeTab, setActiveTab, ownerId }) => {
  return (
    <nav className="navbar-container">
      <div className="btn-toolbar-left" id="inventory-toolbar">
        <NavbarButton
          onClick={() => setActiveTab("items")}
          label="Items"
          variant={activeTab === "items" ? "btn btn-primary" : "btn btn-outline-primary"}
          id = {"btn-items"}
        />
        <NavbarButton
          onClick={() => setActiveTab("fields")}
          label="Fields"
          variant={activeTab === "fields" ? "btn btn-primary" : "btn btn-outline-primary"}
          disabled={!isOwner(ownerId)}
          id = {"btn-custom-fields"}
        />
        <NavbarButton
          onClick={() => setActiveTab("customId")}
          label="Custom ID"
          variant={activeTab === "customId" ? "btn btn-primary" : "btn btn-outline-primary"}
          disabled={!isOwner(ownerId)}
          id={"btn-custom-id"}
        />
        <NavbarButton
          onClick={() => setActiveTab("access")}
          label="Access"
          variant={activeTab === "access" ? "btn btn-primary" : "btn btn-outline-primary"}
          disabled={!isOwner(ownerId)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
