import { useState } from "react";
import Header from "../../components/Header/Header";
import InventoriesTable from "./components/InventoryTable/InventoryTable";
import Toolbar from "./components/Toolbar/Toolbar";
import { useInventories } from "../../hooks/useInventories";
import { deleteInventories } from "../../api/inventories";
import Pagination from "../../components/Pagination/Pagination";
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
      <Pagination page={page} onPageChange={setPage}></Pagination>
      <InventoriesTable
        inventories={inventories}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    </>
  );
};

export default InventoriesPage;
