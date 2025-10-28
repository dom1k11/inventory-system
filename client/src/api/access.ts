import { apiWrapper } from "../utils/apiWrapper";
export async function grantAccess(inventoryId, userId, canEdit) {
  return apiWrapper(`/access/add`, {
    method: "POST",
    body: JSON.stringify({ inventoryId, userId, canEdit }),
  });
}

export function fetchAccessUsers(inventoryId) {
  return apiWrapper(`/access`, {
    method: "POST",
    body: JSON.stringify({ inventoryId }),
  });
}

export async function removeAccess(inventoryId, userIds) {
  return apiWrapper(`/access/remove`, {
    method: "DELETE",
    body: JSON.stringify({ inventoryId, userIds }),
  });
}
