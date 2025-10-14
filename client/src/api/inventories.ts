import { apiWrapper } from "../utils/apiWrapper";

export function fetchInventories() {
  return apiWrapper("/inventories");
}
