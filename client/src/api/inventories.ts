import { apiWrapper } from "../utils/apiWrapper";

export function fetchInventories() {
  return apiWrapper("/inventories");
}

export function fetchInventoryFields(id: number) {
  return apiWrapper(`/inventories/${id}/fields`);
}
