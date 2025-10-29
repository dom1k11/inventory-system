import prisma from '../prisma';

export async function getNextSequence(inventoryId: number) {
  const result = await prisma.items.aggregate({
    where: { inventory_id: inventoryId },
    _max: { sequence_number: true },
  });

  return (result._max.sequence_number || 0) + 1;
}
