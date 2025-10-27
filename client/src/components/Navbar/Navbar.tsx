import NavbarButton from "./NavbarButton";
import "./Navbar.css";
import { isLoggedIn, isOwner } from "../../helpers/auth";

const Navbar = ({ activeTab, setActiveTab, ownerId }) => {
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
          disabled={!isOwner(ownerId)}
        />
        <NavbarButton
          onClick={() => setActiveTab("customId")}
          label="Custom ID"
          variant={
            activeTab === "customId"
              ? "btn btn-primary"
              : "btn btn-outline-primary"
          }
          disabled={!isOwner(ownerId)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
