import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import InventoriesTable from "./components/InventoryTable/InventoryTable";
import InventoriesToolbar from "./components/InventoriesToolbar/InventoriesToolbar";
import { useInventories } from "../../hooks/useInventories";
import { deleteInventories } from "../../api/inventories";
import Pagination from "../../components/Pagination/Pagination";
import { InventoriesOnboarding } from "../../services/onboarding/InventoriesOnboarding";
import { countOffset, LIMIT } from "../../constants/pagination";
const InventoriesPage = () => {
  const [page, setPage] = useState(1);
  const offset = countOffset(page);
  const { inventories, loadInventories } = useInventories(offset, LIMIT);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    if (inventories.length && !localStorage.getItem("onboarded")) {
      InventoriesOnboarding();
      localStorage.setItem("onboarded", "true");
    }
  }, [inventories]);

  async function handleDeleteSelected() {
    if (!selectedIds.length) return;
    await deleteInventories(selectedIds);
    await loadInventories(offset, LIMIT);
    setSelectedIds([]);
  }
  return (
    <>
      <Header title="Inventories" />
      <InventoriesToolbar
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
