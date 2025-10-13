import { getNextSequence } from '../queries/getNextSequence';
import { insertItem } from '../queries/insertItem';
import { generateCustomId } from './CustomIdGenerator';

export async function addItem(inventoryId: number, createdBy: number) {
  console.log('Adding item for inventory:', inventoryId);

  const sequenceNumber = await getNextSequence(inventoryId);
  console.log('Sequence number:', sequenceNumber);

  const customId = await generateCustomId(inventoryId, sequenceNumber);
  console.log('Generated custom_id:', customId);

  const item = await insertItem(
    inventoryId,
    createdBy,
    customId,
    sequenceNumber,
  );

  return item;
}

