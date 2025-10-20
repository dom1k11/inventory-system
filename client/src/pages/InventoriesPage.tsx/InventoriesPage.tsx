import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import InventoriesTable from "./InventoryTable/InventoryTable";
import Toolbar from "./components/Toolbar/Toolbar";

const InventoriesPage = () => {
  const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(false);
    }, []);
  
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header title="Inventories" />
      <Toolbar></Toolbar>
      <InventoriesTable></InventoriesTable>
    </>
  );
};

export default InventoriesPage;
