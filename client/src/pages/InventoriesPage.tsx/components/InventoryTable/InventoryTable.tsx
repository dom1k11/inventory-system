import "./InventoryTable.css";
import InventoryRow from "./InventoryRow/InventoryRow";

const InventoryTable = ({ inventories, selectedIds, setSelectedIds }) => {
  if (!inventories?.length)
    return (
      <div className="text-center my-5">
        <p className="text-muted mb-3">No inventories yet.</p>
      </div>
    );
  return (
    <div className="inventory-table-container">
      <table className="table table-hover" id="inventory-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                className="form-check-input"
                checked={inventories.length > 0 && selectedIds.length === inventories.length}
                onChange={(e) =>
                  e.target.checked
                    ? setSelectedIds(inventories.map((i) => i.id))
                    : setSelectedIds([])
                }
              />
            </th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Created by</th>
          </tr>
        </thead>
        <tbody>
          {
            inventories.map((inventory) => (
              <InventoryRow
                key={inventory.id}
                inventory={inventory}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
              />
            ))
            //TODO ADD PAGINATION
          }
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
