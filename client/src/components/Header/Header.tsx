import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../helpers/auth";
import { fetchUserData } from "../../api/users";
import { SFSyncUser } from "../../api/salesforce";
import SalesforceForm from "../SaleforceForm/SaleforceForm";
import "./Header.css";

const Header = ({ title = "" }) => {
  const navigate = useNavigate();
  const jwtUser = getUser();

  const [showSalesforce, setShowSalesforce] = useState(false);
  const [dbUser, setDbUser] = useState(null); 
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const user = await fetchUserData();
        setDbUser(user);
      } finally {
        setLoadingUser(false);
      }
    }
    load();
  }, []);


  async function handleSyncSubmit(data) {
    await SFSyncUser(data.companyName, data.firstName, data.lastName, data.email, data.phone);
    const updated = await fetchUserData();
    setDbUser(updated);
    setShowSalesforce(false);
  }

  const isSynced = dbUser?.is_synced === true;

  return (
    <header className="app-header">
      <button onClick={() => navigate("/inventories")} className="btn btn-primary">
        Home
      </button>

      <h1>{title}</h1>

      <h2>
        {jwtUser && (
          <span className="user-info">
            {jwtUser.email} ({jwtUser.role})
          </span>
        )}
      </h2>

      {!loadingUser && (
        <button
          className={`btn ${isSynced ? "btn-success" : "btn-outline-primary"}`}
          disabled={isSynced}
          onClick={() => !isSynced && setShowSalesforce(true)}
        >
          {isSynced ? "Connected ✓" : "Connect to Salesforce"}
        </button>
      )}

      <SalesforceForm
        show={showSalesforce}
        onClose={() => setShowSalesforce(false)}
        userEmail={jwtUser?.email}
        onSubmit={handleSyncSubmit}
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
