import prisma from '../prisma';

export async function canEditInventory(req, res, next) {
  const userId = req.user!.id;
  const inventoryId = Number(req.body.inventoryId);
  const inventory = await prisma.inventories.findUnique({
    where: { id: inventoryId },
  });

  if (!inventory) {
    return res.status(404).json({ error: 'Inventory not found' });
  }
  if (req.user.decoded.role === 'admin') return next();
  if (inventory.created_by === userId) return next();

  const access = await prisma.inventory_access.findFirst({
    where: { inventory_id: inventoryId, user_id: userId, can_edit: true },
  });

  if (access) return next();

  return res.status(403).json({ error: 'Access denied' });
}
