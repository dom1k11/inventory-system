import { useState } from "react";
import Header from "../../components/Header/Header";
import InventoriesTable from "./components/InventoryTable/InventoryTable";
import Toolbar from "./components/Toolbar/Toolbar";
import { useInventories } from "../../hooks/useInventories";
import { deleteInventories } from "../../api/inventories";

const InventoriesPage = () => {
  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;

  const { inventories, loadInventories } = useInventories(offset, limit);
  const [selectedIds, setSelectedIds] = useState([]);

  async function handleDeleteSelected() {
    if (!selectedIds.length) return;
    await deleteInventories(selectedIds);
    await loadInventories(offset, limit);
    setSelectedIds([]);
  }

  return (
    <>
      <Header title="Inventories" />
      
      <Toolbar
        onCreated={loadInventories}
        deleteSelected={handleDeleteSelected}
        disableDelete={!selectedIds.length}
      />
      <nav className="my-3">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
            >
              Previous
            </button>
          </li>
          <li className="page-item active">
            <span className="page-link">{page}</span>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => setPage((p) => p + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
      <InventoriesTable
        inventories={inventories}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    </>
  );
};

export default InventoriesPage;
