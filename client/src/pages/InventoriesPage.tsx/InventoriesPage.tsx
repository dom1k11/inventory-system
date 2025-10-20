import Header from "../../components/Header/Header";
import InventoriesTable from "./InventoryTable/InventoryTable";
import Toolbar from "./components/Toolbar/Toolbar";

const InventoriesPage = () => {

  return (
    <>
      <Header title="Inventories" />
      <Toolbar  />
      <InventoriesTable />
    </>
  );
};

export default InventoriesPage;
