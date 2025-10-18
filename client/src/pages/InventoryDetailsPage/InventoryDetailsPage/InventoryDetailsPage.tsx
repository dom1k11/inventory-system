import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Navbar from "../../../components/Navbar/Navbar";
import ItemsTable from "../Items/ItemsTable/ItemsTable";
import CustomIdForm from "../../../components/CustomIdForm/CustomIdForm";
import { useInventories } from "../../../hooks/useInventories";
import { useItems } from "../../../hooks/useItem";
import "./InventoryDetailsPage.css";
import CustomFieldsForm from "./components/CustomFieldsForm/CustomFieldsForm";
const InventoryDetailsPage = () => {
  const { id } = useParams();
  const { inventories, loading } = useInventories();
  const inventory = inventories.find((inv) => inv.id === Number(id));

  const [activeTab, setActiveTab] = useState<"items" | "fields" | "customId">(
    "items"
  );

  const { items, loadItems } = useItems();
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header title={inventory ? inventory.title : "Loading..."} />
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        loadItems={loadItems}
      />

      {activeTab === "items" && <ItemsTable items={items} />}
      {activeTab === "customId" && <CustomIdForm />}
      {activeTab === "fields" && (
       <CustomFieldsForm></CustomFieldsForm>
      )}
    </>
  );
};

export default InventoryDetailsPage;
