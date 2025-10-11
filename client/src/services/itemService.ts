import { apiWrapper } from "../utils/apiWrapper";

export function fetchItems(id:number) {
  return apiWrapper(`/inventories/${id}/items`);
}
