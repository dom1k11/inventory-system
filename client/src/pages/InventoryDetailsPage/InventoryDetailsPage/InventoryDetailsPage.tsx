import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Navbar from "../../../components/Navbar/Navbar";
import ItemsTable from "../Items/ItemsTable/ItemsTable";
import CustomIdForm from "../../../components/CustomIdForm/CustomIdForm";
import CustomFieldsForm from "./components/CustomFieldsForm/CustomFieldsForm";
import Toolbar from "./components/Toolbar/Toolbar";
import { useInventories } from "../../../hooks/useInventories";
import { useItems } from "../../../hooks/useItem";
import { deleteItems } from "../../../api/items";
import "./InventoryDetailsPage.css";
import AccessForm from "./components/AccessForm/AccessForm";
import Pagination from "../../../components/Pagination/Pagination";
//TODO REFACTOR! IMPORTANT! MAKE ONE SOURCE OF TRUTH

const InventoryDetailsPage = () => {
  const { id } = useParams();
  const { inventories, loading } = useInventories();
  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;
  const { items, loadItems } = useItems(offset, limit);
  const [activeTab, setActiveTab] = useState<"items" | "fields" | "customId" | "access">("items");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const inventory = inventories.find((inv) => inv.id === Number(id));
  if (loading) return <p>Loading...</p>;
  async function handleDeleteSelected() {
    if (!selectedIds.length) return;
    await deleteItems(Number(id), selectedIds);
    await loadItems();
    setSelectedIds([]);
  }

  console.log(page);
  return (
    <>
      <Header title={inventory ? inventory.title : "Loading..."} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} ownerId={inventory.created_by} />

      {activeTab === "items" && (
        <>
          <Toolbar
            onCreated={loadItems}
            loadItems={loadItems}
            deleteSelected={handleDeleteSelected}
            disableDelete={!selectedIds.length}
            ownerId={inventory.created_by}
          />
          <Pagination page={page} onPageChange={setPage}></Pagination>
          <ItemsTable items={items} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
        </>
      )}

      {activeTab === "customId" && <CustomIdForm />}
      {activeTab === "fields" && <CustomFieldsForm />}
      {activeTab === "access" && <AccessForm ownerId={inventory.created_by} />}
    </>
  );
};

export default InventoryDetailsPage;
