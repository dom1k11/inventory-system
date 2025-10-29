import { useEffect, useState } from "react";
import { fetchCurrentCustomId } from "../../../api/customid";

export function useFormat(inventoryId: number) {
  const [fields, setFields] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFormat() {
      if (!inventoryId) return;
      const data = await fetchCurrentCustomId(inventoryId);
      if (Array.isArray(data)) {
        setFields(
          data.map((f, index) => ({
            id: index + 1,
            type: f.field_type,
            value: f.value || "",
          })),
        );
      }
      setLoading(false);
    }
    loadFormat();
  }, [inventoryId]);

  return { fields, setFields, loading };
}
