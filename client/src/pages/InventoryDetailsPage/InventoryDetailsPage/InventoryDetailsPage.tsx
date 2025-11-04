import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Navbar from "../../../components/Navbar/Navbar";
import ItemsTable from "../Items/ItemsTable/ItemsTable";
import CustomIdForm from "../../../components/CustomIdForm/CustomIdForm";
import CustomFieldsForm from "./components/CustomFieldsForm/CustomFieldsForm";
import ItemsToolbar from "./components/ItemsToolbar/ItemsToolbar";
import { useItems } from "../../../hooks/useItem";
import { deleteItems } from "../../../api/items";
import "./InventoryDetailsPage.css";
import AccessForm from "./components/AccessForm/AccessForm";
import Pagination from "../../../components/Pagination/Pagination";
import { fetchInventory } from "../../../api/inventories";
import { startInventoryDetailsOnboarding } from "../../../services/onboarding/InventoryDetailsOnboarding";
import { countOffset, LIMIT } from "../../../constants/pagination";
//TODO REFACTOR! IMPORTANT! MAKE ONE SOURCE OF TRUTH
const InventoryDetailsPage = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const offset = countOffset(page);
  const { items, loadItems } = useItems(offset, LIMIT);
  const [activeTab, setActiveTab] = useState<"items" | "fields" | "customId" | "access">("items");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [inventory, setInventory] = useState<any>([]);

  useEffect(() => {
    if (inventory && inventory.id && !localStorage.getItem("onboarded-details")) {
      startInventoryDetailsOnboarding();
      localStorage.setItem("onboarded-details", "true");
    }
  }, [inventory]);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const data = await fetchInventory(Number(id));
      setInventory(data);
    })();
  }, [id]);
  if (!inventory) return <p>Loading...</p>;

  async function handleDeleteSelected() {
    if (!selectedIds.length) return;
    await deleteItems(Number(id), selectedIds);
    await loadItems();
    setSelectedIds([]);
  }

  return (
    <>
      <Header title={inventory ? inventory.title : "Loading..."} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} ownerId={inventory.created_by} />

      {activeTab === "items" && (
        <>
          <ItemsToolbar
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
      {activeTab === "fields" && <CustomFieldsForm loadItems={loadItems} />}
      {activeTab === "access" && <AccessForm ownerId={inventory.created_by} />}
    </>
  );
};

export default InventoryDetailsPage;
