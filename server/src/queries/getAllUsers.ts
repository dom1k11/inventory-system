import prisma from '../prisma';
export async function getAllUsers() {
  return prisma.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}
