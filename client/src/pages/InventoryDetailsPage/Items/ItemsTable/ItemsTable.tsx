import { useMemo } from "react";
import { getTableKeys } from "../../../../utils/getTableKeys";
import "./ItemsTable.css";
import { toggleSelection } from "../../../../helpers/selection";
import { formatKey } from "../../../../utils/formatKey";
const ItemsTable = ({ items, selectedIds, setSelectedIds }) => {
  const allKeys = useMemo(() => getTableKeys(items), [items]);
  if (!items?.length)
    return (
      <div className="text-center my-5">
        <p className="text-muted mb-3">No items yet.</p>
      </div>
    );

  return (
    <div className="inventory-table-container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                className="form-check-input"
                checked={items.length > 0 && selectedIds.length === items.length}
                onChange={(e) =>
                  e.target.checked
                    ? setSelectedIds(items.map((i) => i.item_id))
                    : setSelectedIds([])
                }
              />
            </th>
            {allKeys.map((key) => (
              <th key={key}>{formatKey(key)}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.custom_id}>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedIds.includes(item.item_id)}
                  onChange={() => setSelectedIds(toggleSelection(selectedIds, item.item_id))}
                />
              </td>
              {allKeys.map((key) => {
                const value = item[key] ?? item.fields?.[key] ?? "-";
                return <td key={key}>{value}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsTable;
