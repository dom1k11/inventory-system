import { apiWrapper } from "../utils/apiWrapper";

export async function changeCustomId(inventoryId, fields) {
  return apiWrapper(`/customid`, {
    method: "POST",
    body: JSON.stringify({ inventoryId, fields }),
  });
}
