import { useMemo } from "react";
import ItemRow from "../ItemRow/ItemRow";
import { getTableKeys } from "../../../utils/getTableKeys";
import "./ItemsTable.css";

const ItemsTable = ({ items }) => {
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
            {allKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow key={item.custom_id} item={item} allKeys={allKeys} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsTable;
