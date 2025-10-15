import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import InventoriesTable from "../../components/InventoryTable/InventoryTable";

const InventoriesPage = () => {
  const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(false);
    }, []);
  
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header title="Inventories" />
      <InventoriesTable></InventoriesTable>
    </>
  );
};

export default InventoriesPage;
