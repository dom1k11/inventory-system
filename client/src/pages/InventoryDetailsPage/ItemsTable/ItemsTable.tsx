import { useState } from "react";
import { useItems } from "../../../hooks/useItem";
import ItemRow from "../ItemRow/ItemRow";
import "./ItemsTable.css";

const ItemsTable = () => {
  const [page, setPage] = useState(1);
  const { items } = useItems();

  return (
    <div className="inventory-table-container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Field Title</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow key={item.custom_id} item={item} />
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          ← Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next →</button>
      </div>
    </div>
  );
};

export default ItemsTable;
