import { useMemo, useState } from "react";
import { getTableKeys } from "../../../../utils/getTableKeys";
import "./ItemsTable.css";
import { toggleSelection } from "../../../../helpers/selection";

const ItemsTable = ({ items }) => {
  const allKeys = useMemo(() => getTableKeys(items), [items]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  if (!items?.length)
    return (
      <div className="text-center my-5">
        <p className="text-muted mb-3">No items yet.</p>
      </div>
    );
  console.log(items.map((i) => i.custom_id));

  return (
    <div className="inventory-table-container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                className="form-check-input"
                checked={
                  items.length > 0 && selectedIds.length === items.length
                }
                onChange={(e) =>
                  e.target.checked
                    ? setSelectedIds(items.map((i) => i.custom_id))
                    : setSelectedIds([])
                }
              />
            </th>
            {allKeys.map((key) => (
              <th key={key}>{key}</th>
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
                  checked={selectedIds.includes(item.custom_id)}
                  onChange={() =>
                    setSelectedIds(toggleSelection(selectedIds, item.custom_id))
                  }
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
