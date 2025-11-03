import { useEffect, useState } from "react";
import { fetchInventories } from "../api/inventories";

export function useInventories(offset, limit) {
  const [inventories, setInventories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadInventories(newOffset = offset, newLimit = limit) {
    setLoading(true);
    const data = await fetchInventories(newOffset, newLimit);
    setInventories(data);
    setLoading(false);
  }

  useEffect(() => {
    loadInventories(offset, limit);
  }, [offset, limit]);

  return { inventories, loadInventories, loading };
}
