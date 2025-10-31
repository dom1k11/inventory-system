import { apiWrapper } from "../utils/apiWrapper";

export async function changeCustomId(inventoryId, fields) {
  return apiWrapper(`/customid`, {
    method: "POST",
    body: JSON.stringify({ inventoryId, fields }),
  });
}

export async function fetchCurrentCustomId(inventoryId) {
  return apiWrapper(`/customid/${inventoryId}`);
}

export async function fetchCustomIdPreview(inventoryId, fields) {
  return apiWrapper(`/customid/${inventoryId}/preview`, {
    method: "POST",
    body: JSON.stringify({ fields }),
  });
}
