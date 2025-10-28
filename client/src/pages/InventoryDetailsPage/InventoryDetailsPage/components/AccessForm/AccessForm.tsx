import AccessSelector from "./components/AccessSelector";
import SubmitButton from "./components/SubmitButton";
import UserSelector from "./components/UserSelector";
import "./AccessForm.css";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../../../../api/users";
import { grantAccess } from "../../../../../api/access";
import { useParams } from "react-router-dom";

const AccessForm = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedAccess, setSelectedAccess] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked submit");

    const newAccess = {
      userId: selectedUserId,
      canEdit: selectedAccess,
    };

    await grantAccess(
      Number(id),
      Number(selectedUserId),
      Boolean(selectedAccess)
    );
    console.log("selectedAccess:", selectedAccess);
    console.log("Grant access:", newAccess);
    console.log({ id, selectedUserId, selectedAccess });

  };

  return (
    <div className="access-form-container">
      <div className="access-id-row">
        <div className="col-md-3">
          <UserSelector users={users} onChange={setSelectedUserId} />
        </div>

        <div className="col-md-8">
          <AccessSelector onChange={setSelectedAccess} />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-outline-primary btn-lg w-100 mb-4"
      >
        Add new user
      </button>
      {selectedUserId && <SubmitButton onClick={handleSubmit} />}{" "}
    </div>
  );
};

export default AccessForm;
