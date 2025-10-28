const AccessList = ({ accessList }) => {
  return (
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
              <strong>{access.users?.name || `User ${access.user_id}`}</strong>
              <p className="text-muted m-0">
                {access.can_edit ? "Write access" : "Read only"}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};


export default AccessList;
