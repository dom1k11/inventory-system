import { useNavigate } from "react-router-dom";
const InventoryRow = ({ inventory }) => {
  const navigate = useNavigate();

  return (
    <>
      <tr
        onClick={() => navigate(`/inventories/${inventory.id}`)}
        style={{ cursor: "pointer" }}
      >
        <td>              <input type="checkbox" className="form-check-input"></input>
</td>
        <td>
          <b> {inventory.id}</b>
        </td>
        <td>{inventory.title}</td>
        <td>{inventory.description}</td>
        <td>{inventory.category}</td>
        <td>{inventory.created_by}</td>
      </tr>
    </>
  );
};

export default InventoryRow;
