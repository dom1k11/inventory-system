import AccessSelector from "./components/AccessSelector";
import SubmitButton from "./components/SubmitButton";
import UserSelector from "./components/UserSelector";
import "./AccessForm.css";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../../../../api/users";
import { fetchAccessUsers, grantAccess, removeAccess } from "../../../../../api/access";
import { useParams } from "react-router-dom";
import AccessList from "./components/AccessList";
import Toolbar from "./components/Toolbar/Toolbar";
const AccessForm = ({ ownerId }) => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedAccess, setSelectedAccess] = useState(false);
  const [accessList, setAccessList] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  async function handleDeleteSelected() {
    await removeAccess(Number(id), selectedIds);
    await loadAccessList();
  }

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
    };
    loadAccessList();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await grantAccess(Number(id), Number(selectedUserId), Boolean(selectedAccess));
    await loadAccessList();
  };

  return (
    <>
      <Toolbar
        deleteSelected={handleDeleteSelected}
        disableDelete={!selectedIds.length}
        ownerId={ownerId}
      ></Toolbar>
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

          <AccessList
            accessList={accessList}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          ></AccessList>
        </div>
      </div>
    </>
  );
};

export default AccessForm;
