import "./InventoryTable.css";
import InventoryRow from "../InventoryRow/InventoryRow";
import { useInventories } from "../../../hooks/useInventories";

const InventoryTable = () => {
  const { inventories } = useInventories();

  return (
    <div className="inventory-table-container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              {" "}
              <input type="checkbox" className="form-check-input"></input>
            </th>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Created by</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => (
            <InventoryRow
              key={inventory.id}
              inventory={inventory}
            ></InventoryRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
