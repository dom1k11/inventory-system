import "./InventoryTable.css";
import InventoryRow from "../InventoryRow/InventoryRow";

const InventoryTable = ({ inventories }) => {
  return (
    <div className="inventory-table-container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Created by</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => (
            <InventoryRow key={inventory.id} inventory={inventory} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
