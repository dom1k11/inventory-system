import prisma from '../../prisma';

export async function findUserByEmail(email: string) {
  return prisma.users.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      password_hash: true,
      role: true,
      is_blocked: true,
    },
  });
}
