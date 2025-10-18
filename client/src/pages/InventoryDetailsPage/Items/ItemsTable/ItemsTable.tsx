import { useMemo, useState } from "react";
import ItemRow from "../ItemRow/ItemRow";
import { getTableKeys } from "../../../../utils/getTableKeys";
import "./ItemsTable.css";
import { toggleSelection } from "../../../../helpers/selection";

const ItemsTable = ({ items }) => {
  const allKeys = useMemo(() => getTableKeys(items), [items]);
  const [selected, setSelected] = useState<number[]>([]);
  const allSelected = selected.length === items.length && items.length > 0;

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
                className="form-check-input"
                type="checkbox"
                checked={allSelected}
                onChange={() =>
                  setSelected(allSelected ? [] : items.map((i) => i.id))
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
            <ItemRow
              key={item.custom_id}
              item={item}
              allKeys={allKeys}
              checked={selected.includes(item.id)}
              onToggle={() => setSelected(prev => toggleSelection(prev, item.id))}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsTable;
