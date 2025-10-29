import prisma from '../prisma';

export async function insertItem(
  inventoryId: number,
  createdBy: number,
  customId: string,
  sequenceNumber: number,
) {
  return prisma.items.create({
    data: {
      inventory_id: inventoryId,
      created_by: createdBy,
      custom_id: customId,
      sequence_number: sequenceNumber,
    },
  });
}
