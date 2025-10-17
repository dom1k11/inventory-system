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
