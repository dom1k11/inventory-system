import { useEffect, useState } from "react";
import { fetchInventories } from "../api/inventories";
export function useInventories() {
  const [inventories, setInventories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadInventories() {
    const data = await fetchInventories();
    setInventories([...data]);
    setLoading(false);
  }

  useEffect(() => {
    loadInventories();
  }, []);

  return { inventories, loadInventories, loading };
}
