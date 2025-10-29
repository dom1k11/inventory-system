import { useState } from "react";
import Header from "../../components/Header/Header";
import InventoriesTable from "./components/InventoryTable/InventoryTable";
import Toolbar from "./components/Toolbar/Toolbar";
import { useInventories } from "../../hooks/useInventories";
import { deleteInventories } from "../../api/inventories";

const InventoriesPage = () => {
  const { inventories, loadInventories } = useInventories();
  const [selectedIds, setSelectedIds] = useState([]);

  async function handleDeleteSelected() {
    if (!selectedIds.length) return;
    await deleteInventories(selectedIds);
    await loadInventories();
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
      <InventoriesTable
        inventories={inventories}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
    </>
  );
};

export default InventoriesPage;
