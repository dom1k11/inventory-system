import { useEffect, useState } from "react";
import { fetchItems } from "../api/items";
import { useParams } from "react-router-dom";

export function useItems() {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  async function loadItems() {
    if (!id) return;
    const data = await fetchItems(Number(id));
    setItems(data);
  }

  useEffect(() => {
    loadItems();
  }, [id]);

  return { items, loadItems, setItems };
}
