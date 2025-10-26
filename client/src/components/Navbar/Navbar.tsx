import NavbarButton from "./NavbarButton";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { isLoggedIn } from "../../helpers/auth";

const Navbar = ({ activeTab, setActiveTab }) => {
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
          disabled={!isLoggedIn()}
        />
        <NavbarButton
          onClick={() => setActiveTab("customId")}
          label="Custom ID"
          variant={
            activeTab === "customId"
              ? "btn btn-primary"
              : "btn btn-outline-primary"
          }
          disabled={!isLoggedIn()}
        />
      </div>

      <div className="btn-toolbar-right">
        {/* <NavbarButton
         
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;
