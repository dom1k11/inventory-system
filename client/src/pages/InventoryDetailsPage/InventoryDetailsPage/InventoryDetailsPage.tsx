import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Navbar from "../../../components/Navbar/Navbar";
import ItemsTable from "../ItemsTable/ItemsTable";
import { useInventories } from "../../../hooks/useInventories";

const InventoryDetailsPage = () => {
  const { id } = useParams();
  const { inventories } = useInventories();
  const inventory = inventories.find((inv) => inv.id === Number(id));

  return (
    <>
      <Header title={inventory ? inventory.title : "Loading..."} />
      <Navbar />
      <ItemsTable />
    </>
  );
};

export default InventoryDetailsPage;
