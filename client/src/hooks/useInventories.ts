import { useEffect, useState } from "react";
import { fetchInventories } from "../api/inventories";
export function useInventories() {
  const [inventories, setInventories] = useState<any[]>([]);

  async function loadInventories() {
    const data = await fetchInventories();
    console.log(data);
    setInventories([...data]);
  }

  useEffect(() => {
    loadInventories();
  }, []);

  return { inventories, loadInventories };
}
