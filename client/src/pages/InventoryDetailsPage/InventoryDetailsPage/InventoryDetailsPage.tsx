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

const InventoryDetailsPage = () => {
  const { id } = useParams();
  const { inventories, loading } = useInventories();
  const { items, loadItems } = useItems();

  const [activeTab, setActiveTab] = useState<"items" | "fields" | "customId">(
    "items"
  );
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const inventory = inventories.find((inv) => inv.id === Number(id));
  if (loading) return <p>Loading...</p>;

  console.log("inventory owner", inventory.created_by);
  async function handleDeleteSelected() {
    if (!selectedIds.length) return;
    await deleteItems(Number(id), selectedIds);
    await loadItems();
    setSelectedIds([]);
  }
  //TODO MOVE TO SERVICES

  return (
    <>
      <Header title={inventory ? inventory.title : "Loading..."} />
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        ownerId={inventory.created_by}
      />

      {activeTab === "items" && (
        <>
          <Toolbar
            loadItems={loadItems}
            deleteSelected={handleDeleteSelected}
            disableDelete={!selectedIds.length}
            ownerId={inventory.created_by}
          />
          <ItemsTable
            items={items}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        </>
      )}

      {activeTab === "customId" && <CustomIdForm />}
      {activeTab === "fields" && <CustomFieldsForm />}
    </>
  );
};

export default InventoryDetailsPage;
