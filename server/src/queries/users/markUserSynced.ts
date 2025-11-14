import prisma from "../../prisma"; 

export async function markUserSynced(userId: number) {
  return await prisma.users.update({
    where: { id: userId },
    data: {
      is_synced: true,
    },
  });
}
