import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Navbar from "../../../components/Navbar/Navbar";
import ItemsTable from "../ItemsTable/ItemsTable";
import CustomIdForm from "../../../components/CustomIdForm/CustomIdForm";
import { useInventories } from "../../../hooks/useInventories";
import "./InventoryDetailsPage.css";

const InventoryDetailsPage = () => {
  const { id } = useParams();
  const { inventories } = useInventories();
  const inventory = inventories.find((inv) => inv.id === Number(id));

  const [activeTab, setActiveTab] = useState<"items" | "fields" | "customId">("items");

  return (
    <>
      <Header title={inventory ? inventory.title : "Loading..."} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "items" && <ItemsTable />}
      {activeTab === "customId" && <CustomIdForm />}
      {activeTab === "fields" && <p style={{ padding: "20px" }}>Fields placeholder...</p>}
    </>
  );
};

export default InventoryDetailsPage;
