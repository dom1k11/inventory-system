import { useEffect, useState } from "react";
import { fetchInventoryFields } from "../../../../../../api/inventories";
export function useFields(inventoryId: number) {
  const [fields, setFields] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadFields() {
    setLoading(true);
    const data = await fetchInventoryFields(inventoryId);
    setFields(data);
    setLoading(false);
  }

  useEffect(() => {
    loadFields();
  }, [inventoryId]);

  return { fields, setFields, loading, loadFields };
}
