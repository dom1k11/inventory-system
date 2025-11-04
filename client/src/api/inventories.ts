import { LIMIT } from "../constants/pagination";
import { apiWrapper } from "../utils/apiWrapper";

export function fetchInventory(id: number) {
  return apiWrapper(`/inventories/${id}`);
}

export function fetchInventories(offset = 0, limit = LIMIT) {
  return apiWrapper(`/inventories?offset=${offset}&limit=${limit}`);
}

export function fetchInventoryFields(id: number) {
  return apiWrapper(`/inventories/${id}/fields`);
}

export async function addCustomField(inventoryId, fields) {
  return apiWrapper(`/inventories/fields/add`, {
    method: "POST",
    body: JSON.stringify({ inventoryId, fields }),
  });
}

export async function deleteCustomField(inventoryId, ids) {
  return apiWrapper(`/inventories/fields/delete`, {
    method: "DELETE",
    body: JSON.stringify({ inventoryId, ids }),
  });
}

export async function addInventory(title, description, category) {
  return apiWrapper(`/inventories/add`, {
    method: "POST",
    body: JSON.stringify({ title, description, category }),
  });
}

export async function deleteInventories(ids) {
  return apiWrapper(`/inventories/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids }),
  });
}
