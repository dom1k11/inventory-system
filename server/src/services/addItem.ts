import { getNextSequence } from '../queries/getNextSequence';
import { insertItem } from '../queries/insertItem';
import { generateCustomId } from './CustomIdGenerator';

export async function addItem(inventoryId: number, createdBy: number) {
  const sequenceNumber = await getNextSequence(inventoryId);
  const customId = await generateCustomId(inventoryId, sequenceNumber);
  const item = await insertItem(
    inventoryId,
    createdBy,
    customId,
    sequenceNumber,
  );

  return item;
}
