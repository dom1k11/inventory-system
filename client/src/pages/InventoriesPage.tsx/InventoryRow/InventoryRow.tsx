import { useNavigate } from "react-router-dom";
import { toggleSelection } from "../../../helpers/selection";
const InventoryRow = ({ inventory, selectedIds, setSelectedIds }) => {
  const navigate = useNavigate();

  return (
    <>
      <tr
        onClick={() => navigate(`/inventories/${inventory.id}`)}
        style={{ cursor: "pointer" }}
      >
        <td>
          {" "}
          <input
            type="checkbox"
            className="form-check-input"
            checked={selectedIds.includes(inventory.id)}
            onClick={(e) => e.stopPropagation()}
            onChange={() =>
              setSelectedIds(toggleSelection(selectedIds, inventory.id))
            }
          ></input>
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
