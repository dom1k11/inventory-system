import { createItem } from "../api/items";
export async function handleAdd() {
  try {
    await createItem(1, 1); //TODO Change to get inventortyId as param and createdBy from localStorage
  } catch (err) {
    console.error("Failed to create item:", err);
  }
}
