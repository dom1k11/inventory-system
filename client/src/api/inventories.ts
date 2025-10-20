import { apiWrapper } from "../utils/apiWrapper";

export function fetchInventories() {
  return apiWrapper("/inventories");
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

export async function addInventory(title, description, category, created_by) {
  return apiWrapper(`/inventories/add`, {
    method: "POST",
    body: JSON.stringify({ title, description, category, created_by }),
  });
}

export async function deleteInventories(ids) {
  return apiWrapper(`/inventories/delete`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids }),
  });
}
