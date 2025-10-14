import { createItem } from "../api/items";
export async function handleAdd(id) {
  try {
    await createItem(id, 1); //TODO Change and createdBy from sessionStorage
  } catch (err) {
    console.error("Failed to create item:", err);
  }
}
