import { getCustomIdFormat } from '../queries/inventories/customId/getCustomIdFormat';
import { buildCustomId } from '../utils/buildCustomId';

export async function generateCustomId(
  inventoryId: number,
  sequenceNumber: number,
) {
  const fields = await getCustomIdFormat(Number(inventoryId));
  const customId = buildCustomId(fields, sequenceNumber);
  return customId;
}
