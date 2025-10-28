const UserSelector = ({ users, onChange }) => {
  return (
    <select className="form-select" onChange={(e) => onChange(e.target.value)}>
      <option value="">Select user</option>
      {users.map((u) => (
        <option key={u.id} value={u.id}>
          {u.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelector;
