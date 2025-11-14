import prisma from '../../prisma';
export async function getAllUsers() {
  return prisma.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

export async function getUserById(userId: number) {
  return await prisma.users.findUnique({
    where: { id: userId },
  });
}
