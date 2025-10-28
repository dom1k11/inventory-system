import AccessSelector from "./components/AccessSelector";
import SubmitButton from "./components/SubmitButton";
import UserSelector from "./components/UserSelector";
import "./AccessForm.css";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../../../../api/users";
import { fetchAccessUsers, grantAccess } from "../../../../../api/access";
import { useParams } from "react-router-dom";

const AccessForm = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedAccess, setSelectedAccess] = useState(false);
  const [accessList, setAccessList] = useState([]);

  const loadAccessList = async () => {
    const data = await fetchAccessUsers(Number(id));
    setAccessList(data);
  };

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  useEffect(() => {
    const loadAccessList = async () => {
      const data = await fetchAccessUsers(Number(id));
      setAccessList(data);
      console.log(data, "users with access");
    };
    loadAccessList();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked submit");
    await grantAccess(
      Number(id),
      Number(selectedUserId),
      Boolean(selectedAccess)
    );
    await loadAccessList();
 
  };

  return (
    <div className="access-form-container">
      <div className="row">
        <div className="col-md-6 border-end pe-4">
          <h5 className="mb-3">Add new user</h5>

          <div className="access-id-row mb-3">
            <div className="col-md">
              <UserSelector users={users} onChange={setSelectedUserId} />
            </div>
            <div className="col-md">
              <AccessSelector onChange={setSelectedAccess} />
            </div>
          </div>
          {selectedUserId && <SubmitButton onClick={handleSubmit} />}
        </div>

        <div className="col-md-6 ps-4">
          <h5 className="mb-3">Current access</h5>

          {accessList.length === 0 ? (
            <p className="text-muted">No users have access yet.</p>
          ) : (
            accessList.map((access) => (
              <div
                key={access.id}
                className="access-id-row d-flex justify-content-between align-items-center mb-2"
              >
                <div>
                  <strong>
                    {access.users?.name || `User ${access.user_id}`}
                  </strong>
                  <p className="text-muted m-0">
                    {access.can_edit ? "Write access" : "Read only"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessForm;
