import { apiWrapper } from "../utils/apiWrapper";

export function fetchInventories() {
  return apiWrapper("/inventories");
}

export function fetchInventoryFields(id: number) {
  return apiWrapper(`/inventories/${id}/fields`);
}


export async function addCustomField(inventoryId, fields) {
  return apiWrapper(`/inventories/fields/change`, {
    method: "PUT",
    body: JSON.stringify({ inventoryId, fields }),
  });
}