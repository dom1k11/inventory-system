import Header from "../../components/Header/Header";
import InventoriesTable from "../../components/InventoryTable/InventoryTable";
import Navbar from "../../components/Navbar/Navbar";

const InventoriesPage = () => {
  return (
    <>
      <Header title="Inventories" />
      <Navbar></Navbar>
      <InventoriesTable></InventoriesTable>
    </>
  );
};

export default InventoriesPage;
