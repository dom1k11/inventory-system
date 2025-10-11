import { useState } from "react";

import "./InventoryTable.css";
import InventoryRow from "../InventoryRow/InventoryRow";

const InventoryTable = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="inventory-table-container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Created by</th>
          </tr>
        </thead>
        <tbody>
          <InventoryRow></InventoryRow>
          <InventoryRow></InventoryRow>
          <InventoryRow></InventoryRow>
          <InventoryRow></InventoryRow>
          <InventoryRow></InventoryRow>
          <InventoryRow></InventoryRow>
          <InventoryRow></InventoryRow>
          <InventoryRow></InventoryRow>
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

export default InventoryTable;
