import Header from "../../components/Header/Header";
import InventoriesTable from "../../components/InventoryTable/InventoryTable";

const InventoriesPage = () => {
  return (
    <>
      <Header title="Inventories" />
      <InventoriesTable></InventoriesTable>
    </>
  );
};

export default InventoriesPage;
