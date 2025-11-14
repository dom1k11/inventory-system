import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../helpers/auth";
import "./Header.css";
import SalesforceForm from "../SaleforceForm/SaleforceForm";
      import {SFSyncUser} from "../../api/salesforce";

const Header = ({ title = "" }) => {
  const navigate = useNavigate();
  const user = getUser();
  const [showSalesforce, setShowSalesforce] = useState(false);

  return (
    <header className="app-header">
      <button onClick={() => navigate("/inventories")} className="btn btn-primary">
        Home
      </button>
      <h1>{title}</h1>
      <h2>
        {user && (
          <span className="user-info">
            {user.email} ({user.role})
          </span>
        )}
      </h2>
      <button className="btn btn-outline-primary" onClick={() => setShowSalesforce(true)}>
        Connect to Salesforce
      </button>
     <SalesforceForm
  show={showSalesforce}
  onClose={() => setShowSalesforce(false)}
  userEmail={user?.email}
  onSubmit={async (data) => {
    await SFSyncUser(
      data.companyName,
      data.firstName,
      data.lastName,
      data.email,
      data.phone
    );
  }}
/>

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
