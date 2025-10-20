import Header from "../../components/Header/Header";
import InventoriesTable from "./InventoryTable/InventoryTable";
import Toolbar from "./components/Toolbar/Toolbar";
import { useInventories } from "../../hooks/useInventories";

const InventoriesPage = () => {
  const { inventories, loadInventories } = useInventories();

  return (
    <>
      <Header title="Inventories" />
      <Toolbar onCreated={loadInventories} />
      <InventoriesTable inventories={inventories} />
    </>
  );
};

export default InventoriesPage;
