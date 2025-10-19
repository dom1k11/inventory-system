import { apiWrapper } from "../utils/apiWrapper";

export function fetchItems(id: number) {
  return apiWrapper(`/inventories/${id}/items`);
}

export async function createItem(inventoryId, createdBy) {
  return apiWrapper(`/item`, {
    method: "POST",
    body: JSON.stringify({ inventoryId, createdBy }),
  });
}
export async function deleteItems(inventoryId, ids) {
  return apiWrapper(`/item/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({ inventoryId, ids }),
  });
}
