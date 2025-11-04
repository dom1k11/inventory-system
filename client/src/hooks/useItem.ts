import { useEffect, useState } from "react";
import { fetchItems } from "../api/items";
import { useParams } from "react-router-dom";
import { LIMIT } from "../constants/pagination";

export function useItems(offset = 0, limit = LIMIT) {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  async function loadItems(newOffset = offset, newLimit = limit) {
    if (!id) return;
    const data = await fetchItems(Number(id), newOffset, newLimit);
    setItems(data);
  }

  useEffect(() => {
    loadItems();
  }, [id, offset, limit]);

  return { items, loadItems, setItems };
}
