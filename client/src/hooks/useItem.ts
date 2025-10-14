import { useEffect, useState } from "react";
import { fetchItems } from "../api/items";
import { useParams } from "react-router-dom";

export function useItems() {
  const { id } = useParams();
  const [items, setInventories] = useState<any[]>([]);

  async function loadItems() {
    if (!id) return;
    const data = await fetchItems(Number(id));
    console.log(data);
    setInventories([...data]);
  }

  useEffect(() => {
    loadItems();
  }, [id]);

  return { items, loadItems };
}
