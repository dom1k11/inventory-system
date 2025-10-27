import prisma from '../../prisma';

export async function insertAccess(
  inventoryId,
  userId,
  canEdit
) {
  return prisma.inventory_access.upsert({
    where: {
      inventory_id_user_id: {
        inventory_id: inventoryId,
        user_id: userId,
      },
    },
    create: {
      inventory_id: inventoryId,
      user_id: userId,
      can_edit: canEdit,
    },
    update: {
      can_edit: canEdit,
    },
  });
}
